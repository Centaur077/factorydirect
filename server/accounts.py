"""Manufacturer accounts and ownership-scoped operations."""
import hashlib
import hmac
import json
import re
import secrets
import time
import uuid
from http.cookies import SimpleCookie
from urllib.parse import urlsplit


def migrate(db):
    db.executescript('''
    CREATE TABLE IF NOT EXISTS accounts(email TEXT PRIMARY KEY, password_hash TEXT NOT NULL,
      salt TEXT NOT NULL, maker_id TEXT UNIQUE NOT NULL REFERENCES manufacturers(id));
    CREATE TABLE IF NOT EXISTS sessions(token_hash TEXT PRIMARY KEY, email TEXT REFERENCES accounts(email), expires INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS maker_request_status(request_id TEXT REFERENCES requests(id),
      maker_id TEXT REFERENCES manufacturers(id), status TEXT NOT NULL, PRIMARY KEY(request_id,maker_id));
    ''')


def text(body,key,minimum=1,maximum=160):
    value=body.get(key)
    if not isinstance(value,str) or not minimum<=len(value.strip())<=maximum:
        raise ValueError('Некорректное поле: '+key)
    return value.strip()


def password_hash(password,salt):
    return hashlib.pbkdf2_hmac('sha256',password.encode(),bytes.fromhex(salt),600000).hex()


def profile(body,cities):
    name=text(body,'name',2,100)
    city=text(body,'city')
    role=text(body,'role')
    if city not in cities or role not in ('manufacturer','distributor','seller'):
        raise ValueError('Выберите город и роль компании.')
    url=text(body,'sourceUrl',0,300)
    parsed=urlsplit(url)
    if url and (parsed.scheme not in ('http','https') or not parsed.hostname or parsed.username or parsed.password):
        raise ValueError('Укажите полный http/https адрес официального сайта.')
    description=text(body,'description',0,1000)
    return dict(name=name,city=city,role=role,sourceUrl=url,description={k:description for k in ('ru','kk','en')},initials=''.join(x[0] for x in name.split()[:2]).upper())


def authenticate(db,cookie):
    jar=SimpleCookie()
    try: jar.load(cookie or '')
    except Exception: return None
    token=jar.get('fd_session')
    if not token:return None
    row=db.execute('SELECT a.email,a.maker_id FROM sessions s JOIN accounts a ON s.email=a.email WHERE s.token_hash=? AND s.expires>?',
                   (hashlib.sha256(token.value.encode()).hexdigest(),int(time.time()))).fetchone()
    return dict(row) if row else None


def login(db,body,register,cities):
    email=text(body,'email',3,160).lower()
    if not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',email):raise ValueError('Некорректный email.')
    password=text(body,'password',10,128)
    if register:
        company=profile(body,cities)
        if db.execute('SELECT 1 FROM accounts WHERE email=?',(email,)).fetchone():raise ValueError('Этот email уже зарегистрирован.')
        mid='m_'+uuid.uuid4().hex
        company.update(id=mid,rating=0,dispatch=2,minOrder=1,categories=[],verified=False)
        db.execute('INSERT INTO manufacturers(id,name,city,source_url,payload) VALUES(?,?,?,?,?)',(mid,company['name'],company['city'],company['sourceUrl'],json.dumps(company,ensure_ascii=False)))
        salt=secrets.token_hex(16)
        db.execute('INSERT INTO accounts VALUES(?,?,?,?)',(email,password_hash(password,salt),salt,mid))
    row=db.execute('SELECT * FROM accounts WHERE email=?',(email,)).fetchone()
    salt=row['salt'] if row else '00'*16
    expected=row['password_hash'] if row else '00'*32
    if not hmac.compare_digest(password_hash(password,salt),expected):raise ValueError('Неверный email или пароль.')
    token=secrets.token_urlsafe(32)
    db.execute('DELETE FROM sessions WHERE expires<=?',(int(time.time()),))
    db.execute('INSERT INTO sessions VALUES(?,?,?)',(hashlib.sha256(token.encode()).hexdigest(),email,int(time.time())+86400))
    return token


def dashboard(db,user):
    mid=user['maker_id']
    row=db.execute('SELECT * FROM manufacturers WHERE id=?',(mid,)).fetchone()
    maker=json.loads(row['payload']);maker['sourceUrl']=row['source_url'] or ''
    products=[]
    for row in db.execute('SELECT p.payload,o.base,o.tiers FROM products p JOIN offers o ON p.id=o.product_id WHERE o.maker_id=?',(mid,)):
        p=json.loads(row['payload']);p.update(price=row['base'],minimum=json.loads(row['tiers'])[0][0]);products.append(p)
    requests={}
    for row in db.execute('SELECT r.id,r.created_at,r.contact,i.snapshot FROM requests r JOIN request_items i ON r.id=i.request_id ORDER BY r.created_at DESC'):
        item=json.loads(row['snapshot'])
        if item['makerId']!=mid:continue
        rid=row['id']
        if rid not in requests:
            state=db.execute('SELECT status FROM maker_request_status WHERE request_id=? AND maker_id=?',(rid,mid)).fetchone()
            requests[rid]=dict(id=rid,createdAt=row['created_at'],contact=row['contact'],status=state['status'] if state else 'received',items=[],total=0)
        requests[rid]['items'].append(item);requests[rid]['total']+=item['total']
    return dict(email=user['email'],manufacturer=maker,products=products,requests=list(requests.values()))


def mutate(db,user,path,body,cities):
    mid=user['maker_id']
    if path=='/api/seller/profile':
        changes=profile(body,cities)
        old=json.loads(db.execute('SELECT payload FROM manufacturers WHERE id=?',(mid,)).fetchone()[0]);old.update(changes)
        db.execute('UPDATE manufacturers SET name=?,city=?,source_url=?,verified=0,payload=? WHERE id=?',(old['name'],old['city'],old['sourceUrl'],json.dumps(old,ensure_ascii=False),mid))
    elif path=='/api/seller/products':
        name=text(body,'name',2,100);unit=text(body,'unit',1,30);description=text(body,'description',0,1000);category=text(body,'category')
        if category not in ('food','clothing','home','tech','packaging','construction'):raise ValueError('Неизвестная категория.')
        price,minimum=body.get('price'),body.get('minimum')
        if type(price) is not int or not 1<=price<=100000000 or type(minimum) is not int or not 1<=minimum<=100000:raise ValueError('Цена и партия должны быть положительными целыми числами.')
        pid='p_'+uuid.uuid4().hex
        p=dict(id=pid,name={k:name for k in ('ru','kk','en')},unit={k:unit for k in ('ru','kk','en')},description=description,category=category,icon='📦',retail=price,illustration='box',demo=False)
        db.execute('INSERT INTO products VALUES(?,?,?)',(pid,category,json.dumps(p,ensure_ascii=False)))
        db.execute('INSERT INTO offers VALUES(?,?,?,?)',(pid,mid,price,json.dumps([[minimum,price]])))
        row=db.execute('SELECT payload FROM manufacturers WHERE id=?',(mid,)).fetchone();m=json.loads(row[0]);m['categories']=sorted(set(m['categories']+[category]));db.execute('UPDATE manufacturers SET payload=? WHERE id=?',(json.dumps(m,ensure_ascii=False),mid))
    elif path=='/api/seller/status':
        rid=text(body,'requestId');state=text(body,'status')
        if state not in ('received','processing','completed','declined'):raise ValueError('Некорректный статус.')
        owned=any(json.loads(r[0])['makerId']==mid for r in db.execute('SELECT snapshot FROM request_items WHERE request_id=?',(rid,)))
        if not owned:raise PermissionError('Заявка недоступна.')
        db.execute('INSERT INTO maker_request_status VALUES(?,?,?) ON CONFLICT(request_id,maker_id) DO UPDATE SET status=excluded.status',(rid,mid,state))
    return {'ok':True}
