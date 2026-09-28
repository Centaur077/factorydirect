import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

spec=importlib.util.spec_from_file_location('app',Path(__file__).resolve().parents[1]/'server/app.py')
app=importlib.util.module_from_spec(spec)
spec.loader.exec_module(app)

class ApiTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory()
        app.DB=Path(self.tmp.name)/'test.sqlite3'
        app.initialize()
        self.item=dict(productId='coffee',makerId='alatau',qty=30,destination='almaty',mode='standard')
    def tearDown(self): self.tmp.cleanup()
    def test_seed_is_idempotent(self):
        app.initialize()
        self.assertEqual(len(app.catalog()['products']),8)
        self.assertTrue(all(not m['verified'] for m in app.catalog()['manufacturers']))
    def test_price_is_server_authoritative(self):
        self.item['unitPrice']=1
        q=app.quote([self.item])
        self.assertEqual(q['total'],178000)
        self.assertEqual(q['items'][0]['unitPrice'],5850)
    def test_delivery_modes(self):
        self.item['mode']='pickup'
        self.assertEqual(app.quote([self.item])['total'],175500)
        self.item['mode']='express'
        self.assertEqual(app.quote([self.item])['items'][0]['delivery'],4400)
    def test_invalid_quantity(self):
        for qty in [0,-1,1,1.5,True,100001,'30']:
            with self.subTest(qty=qty),self.assertRaises(ValueError):
                app.quote([{**self.item,'qty':qty}])
    def test_invalid_offer_and_city(self):
        for patch in [{'makerId':'aqua'},{'destination':'missing'},{'mode':'free'},{'productId':[]}]:
            with self.subTest(patch=patch),self.assertRaises(ValueError):app.quote([{**self.item,**patch}])
    def test_requests_persist_and_retry_once(self):
        body=dict(contact='demo@example.com',items=[self.item],requestKey='test-request-key-1234')
        first=app.create_request(body)
        app.initialize()
        self.assertEqual(app.create_request(body)['id'],first['id'])
        with app.connect() as db:
            self.assertEqual(db.execute('SELECT count(*) FROM requests').fetchone()[0],1)
            row=db.execute('SELECT snapshot FROM request_items').fetchone()
            self.assertEqual(json.loads(row[0])['total'],178000)
        body['items']=[{**self.item,'qty':50}]
        with self.assertRaises(ValueError): app.create_request(body)
    def test_invalid_request_does_not_persist(self):
        with self.assertRaises(ValueError):
            app.create_request(dict(contact='demo@example.com',items=[{**self.item,'qty':1}],requestKey='test-request-key-1234'))
        with app.connect() as db:self.assertEqual(db.execute('SELECT count(*) FROM requests').fetchone()[0],0)

if __name__=='__main__':unittest.main()
