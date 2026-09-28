"""FactoryDirect local MVP API. Python 3.9+, standard library only."""
import argparse
import hashlib
import json
import math
import os
from pathlib import Path
import sqlite3
import uuid
import sys
sys.path.insert(0,str(Path(__file__).resolve().parent))
import accounts
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlsplit, parse_qs

ROOT = Path(__file__).resolve().parent.parent
DB = Path(os.environ.get('FACTORYDIRECT_DB', ROOT / 'data' / 'factorydirect.sqlite3'))
SEED = json.loads((ROOT / 'server' / 'seed.json').read_text())


def connect():
    db = sqlite3.connect(DB, timeout=10)
    db.row_factory = sqlite3.Row
    db.execute('PRAGMA foreign_keys = ON')
    return db


def initialize():
    DB.parent.mkdir(parents=True, exist_ok=True)
    with connect() as db:
        db.executescript('''
        CREATE TABLE IF NOT EXISTS manufacturers (
          id TEXT PRIMARY KEY, name TEXT NOT NULL, city TEXT NOT NULL,
          source_url TEXT, verified INTEGER NOT NULL DEFAULT 0, payload TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS products (
          id TEXT PRIMARY KEY, category TEXT NOT NULL, payload TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS offers (
          product_id TEXT REFERENCES products(id), maker_id TEXT REFERENCES manufacturers(id),
          base INTEGER NOT NULL CHECK(base>0), tiers TEXT NOT NULL,
          PRIMARY KEY(product_id,maker_id));
        CREATE TABLE IF NOT EXISTS requests (
          id TEXT PRIMARY KEY, request_key TEXT UNIQUE NOT NULL, payload_hash TEXT NOT NULL,
          created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          contact TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'received', total INTEGER NOT NULL);
        CREATE TABLE IF NOT EXISTS request_items (
          request_id TEXT REFERENCES requests(id), position INTEGER,
          snapshot TEXT NOT NULL, PRIMARY KEY(request_id,position));
        ''')
        accounts.migrate(db)
        # Seed only a new database; never overwrite edited catalog records on restart.
        if not db.execute('SELECT 1 FROM products LIMIT 1').fetchone():
            for m in SEED['manufacturers']:
                db.execute('INSERT INTO manufacturers(id,name,city,payload) VALUES(?,?,?,?)',
                           (m['id'],m['name'],m['city'],json.dumps(m,ensure_ascii=False)))
            for product in SEED['products']:
                p = dict(product)
                offers = p.pop('offers')
                db.execute('INSERT INTO products VALUES(?,?,?)',(p['id'],p['category'],json.dumps(p,ensure_ascii=False)))
                for o in offers:
                    db.execute('INSERT INTO offers VALUES(?,?,?,?)',(p['id'],o['maker'],o['base'],json.dumps(o['tiers'])))


def catalog():
    with connect() as db:
        makers=[]
        for row in db.execute('SELECT * FROM manufacturers ORDER BY rowid'):
            m=json.loads(row['payload'])
            m.update(sourceUrl=row['source_url'], verified=bool(row['verified']))
            makers.append(m)
        products=[]
        for row in db.execute('SELECT * FROM products ORDER BY rowid'):
            p=json.loads(row['payload'])
            p['offers']=[dict(maker=o['maker_id'],base=o['base'],tiers=json.loads(o['tiers']))
                         for o in db.execute('SELECT * FROM offers WHERE product_id=? ORDER BY rowid',(p['id'],))]
            products.append(p)
    return dict(products=products,manufacturers=makers,cities=SEED['cities'],demo=True)


def quote(items):
    if not isinstance(items,list) or not 1 <= len(items) <= 50:
        raise ValueError('Заявка должна содержать от 1 до 50 позиций.')
    data=catalog()
    products={p['id']:p for p in data['products']}
    makers={m['id']:m for m in data['manufacturers']}
    result=[]
    for item in items:
        if not isinstance(item,dict):
            raise ValueError('Некорректная позиция.')
        pid,mid=item.get('productId'),item.get('makerId')
        if not isinstance(pid,str) or not isinstance(mid,str):
            raise ValueError('Укажите товар и производителя.')
        p,m=products.get(pid),makers.get(mid)
        o=next((o for o in p['offers'] if o['maker']==mid),None) if p else None
        if not p or not m or not o:
            raise ValueError('Предложение не найдено.')
        qty=item.get('qty')
        if type(qty) is not int or not 1 <= qty <= 100000:
            raise ValueError('Количество должно быть целым числом от 1 до 100000.')
        minimum=max(m['minOrder'],o['tiers'][0][0])
        if qty < minimum:
            raise ValueError('Минимальная партия: %s.' % minimum)
        city,mode=item.get('destination'),item.get('mode','standard')
        if not isinstance(city,str) or city not in SEED['cities'] or mode not in ('standard','express','pickup'):
            raise ValueError('Некорректный город или способ доставки.')
        price=o['base']
        for threshold,value in o['tiers']:
            if qty>=threshold: price=value
        distance=SEED['distances'][m['city']][city]
        weight=1.15 if pid in ('water','coffee','cleaner','profile') else .7 if pid in ('box','tshirt','chocolate') else .4
        delivery=2500 if city==m['city'] else 3500+distance*2.2+qty*weight*7
        eta=max(1,math.ceil(distance/650))+m['dispatch']
        if mode=='express':
            delivery*=1.75
            eta=max(1,math.ceil(eta*.62))
        if mode=='pickup': delivery,eta=0,m['dispatch']
        delivery=math.floor(delivery/100+.5)*100
        result.append(dict(productId=pid,makerId=mid,qty=qty,destination=city,mode=mode,
                           productName=p['name'],manufacturer=m['name'],unitPrice=price,
                           goods=price*qty,delivery=delivery,total=price*qty+delivery,eta=eta))
    return dict(items=result,total=sum(x['total'] for x in result),currency='KZT',demo=True)


def create_request(body):
    if not isinstance(body,dict): raise ValueError('Ожидается JSON-объект.')
    contact=body.get('contact')
    key=body.get('requestKey')
    if not isinstance(contact,str) or not 5<=len(contact.strip())<=160:
        raise ValueError('Укажите контакт для связи (5–160 символов).')
    if not isinstance(key,str) or not 16<=len(key)<=80:
        raise ValueError('Некорректный ключ заявки.')
    contact=contact.strip()
    digest=hashlib.sha256(json.dumps(dict(contact=contact,items=body.get('items')),sort_keys=True).encode()).hexdigest()
    with connect() as db:
        db.execute('BEGIN IMMEDIATE')
        previous=db.execute('SELECT * FROM requests WHERE request_key=?',(key,)).fetchone()
        if previous:
            if previous['payload_hash']!=digest: raise ValueError('Этот ключ уже использован для другой заявки.')
            return dict(id=previous['id'],status=previous['status'],total=previous['total'],demo=True)
        estimate=quote(body.get('items'))
        rid='FD-'+uuid.uuid4().hex[:12].upper()
        db.execute('INSERT INTO requests(id,request_key,payload_hash,contact,total) VALUES(?,?,?,?,?)',
                   (rid,key,digest,contact,estimate['total']))
        for i,item in enumerate(estimate['items']):
            db.execute('INSERT INTO request_items VALUES(?,?,?)',(rid,i,json.dumps(item,ensure_ascii=False)))
    return dict(id=rid,status='received',total=estimate['total'],demo=True)


class Handler(BaseHTTPRequestHandler):
    def reply(self,status,payload):
        raw=json.dumps(payload,ensure_ascii=False).encode()
        self.send_response(status)
        self.send_header('Content-Type','application/json; charset=utf-8')
        self.send_header('Content-Length',str(len(raw)))
        self.send_header('Cache-Control','no-store')
        if getattr(self,'cookie',None):
            self.send_header('Set-Cookie',self.cookie)
            self.cookie=None
        self.send_header('X-Content-Type-Options','nosniff')
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self):
        path=urlsplit(self.path).path
        if path=='/api/seller/me':
            with connect() as db:
                user=accounts.authenticate(db,self.headers.get('Cookie'))
                return self.reply(200,accounts.dashboard(db,user)) if user else self.reply(401,{'error':'Войдите в кабинет.'})
        if path=='/api/health': return self.reply(200,dict(status='ok',storage='sqlite'))
        if path in ('/api/catalog','/api/products','/api/manufacturers'):
            data=catalog()
            if path=='/api/products':
                query=parse_qs(urlsplit(self.path).query)
                q=query.get('q',[''])[0].casefold()
                category=query.get('category',['all'])[0]
                data={'products':[p for p in data['products'] if
                     (category=='all' or p['category']==category) and q in ' '.join(p['name'].values()).casefold()], 'demo':True}
            if path=='/api/manufacturers': data={'manufacturers':data['manufacturers'],'demo':True}
            return self.reply(200,data)
        # Explicit public-file allowlist: never serve the database, server or .git.
        file=ROOT / ('index.html' if path=='/' else path.lstrip('/'))
        allowed=path in ('/','/index.html','/style.css','/design.css','/script.js','/features.js','/api-client.js','/seller.html','/seller.js','/seller.css')
        allowed=allowed or (path.startswith('/assets/') and file.suffix=='.svg' and file.resolve().parent==ROOT/'assets')
        if not allowed or not file.is_file(): return self.reply(404,{'error':'Not found'})
        mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'}
        raw=file.read_bytes()
        self.send_response(200)
        self.send_header('Content-Type',mime[file.suffix]+'; charset=utf-8')
        self.send_header('Content-Length',str(len(raw)))
        self.send_header('X-Content-Type-Options','nosniff')
        self.end_headers()
        self.wfile.write(raw)

    def do_POST(self):
        if self.path not in ('/api/quote','/api/requests','/api/auth/register','/api/auth/login','/api/auth/logout','/api/seller/profile','/api/seller/products','/api/seller/status'): return self.reply(404,{'error':'Not found'})
        origin=self.headers.get('Origin')
        if origin and origin not in ('http://'+self.headers.get('Host',''),'https://'+self.headers.get('Host','')):
            return self.reply(403,{'error':'Origin not allowed'})
        if self.headers.get('Content-Type','').split(';')[0]!='application/json':
            return self.reply(415,{'error':'Use application/json'})
        try:
            length=int(self.headers.get('Content-Length','0'))
            if not 0<length<=65536: return self.reply(413,{'error':'Body too large or empty'})
            body=json.loads(self.rfile.read(length))
            if not isinstance(body,dict): raise ValueError('Ожидается JSON-объект.')
            if self.path.startswith('/api/auth/') or self.path.startswith('/api/seller/'):
                with connect() as db:
                    if self.path in ('/api/auth/register','/api/auth/login'):
                        token=accounts.login(db,body,self.path.endswith('register'),SEED['cities'])
                        self.cookie='fd_session='+token+'; HttpOnly; SameSite=Strict; Path=/; Max-Age=86400'
                        db.commit()
                        return self.reply(200,{'ok':True})
                    user=accounts.authenticate(db,self.headers.get('Cookie'))
                    if not user:return self.reply(401,{'error':'Войдите в кабинет.'})
                    if self.path=='/api/auth/logout':
                        jar=accounts.SimpleCookie();jar.load(self.headers.get('Cookie',''))
                        db.execute('DELETE FROM sessions WHERE token_hash=?',(hashlib.sha256(jar['fd_session'].value.encode()).hexdigest(),))
                        self.cookie='fd_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0'
                        db.commit()
                        return self.reply(200,{'ok':True})
                    result=accounts.mutate(db,user,self.path,body,SEED['cities'])
                    db.commit()
                    return self.reply(200,result)
            result=quote(body.get('items')) if self.path=='/api/quote' else create_request(body)
            self.reply(200 if self.path=='/api/quote' else 201,result)
        except (ValueError,TypeError,UnicodeDecodeError) as error:
            self.reply(400,{'error':str(error)})
        except PermissionError as error:
            self.reply(403,{'error':str(error)})
        except sqlite3.Error:
            self.reply(503,{'error':'База временно недоступна. Повторите попытку.'})


if __name__=='__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--port',type=int,default=8001)
    args=parser.parse_args()
    initialize()
    print('FactoryDirect: http://127.0.0.1:%s' % args.port,flush=True)
    ThreadingHTTPServer(('127.0.0.1',args.port),Handler).serve_forever()
