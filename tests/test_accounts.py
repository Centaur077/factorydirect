import test_api
import unittest
app = test_api.app
import json

class AccountTests(unittest.TestCase):
    setUp = test_api.ApiTests.setUp
    tearDown = test_api.ApiTests.tearDown
    def register(self,email='maker@example.com'):
        body=dict(email=email,password='test-password-123',name='Test Factory',city='almaty',role='manufacturer',sourceUrl='https://example.com',description='Test')
        with app.connect() as db:
            token=app.accounts.login(db,body,True,app.SEED['cities'])
        with app.connect() as db:
            user=app.accounts.authenticate(db,'fd_session='+token)
        return user,token,body
    def test_login_and_session(self):
        user,token,body=self.register()
        with app.connect() as db:
            stored=db.execute('SELECT password_hash FROM accounts').fetchone()[0]
            self.assertNotEqual(stored,body['password'])
            self.assertIsNone(app.accounts.authenticate(db,'fd_session=invalid'))
            with self.assertRaises(ValueError):app.accounts.login(db,{**body,'password':'wrong-password'},False,app.SEED['cities'])
            self.assertTrue(app.accounts.login(db,body,False,app.SEED['cities']))
            db.execute('UPDATE sessions SET expires=0')
            self.assertIsNone(app.accounts.authenticate(db,'fd_session='+token))
    def test_product_request_ownership(self):
        user,_,_=self.register()
        other,_,_=self.register('other@example.com')
        with app.connect() as db:
            app.accounts.mutate(db,user,'/api/seller/products',dict(name='Test box',unit='pcs',description='box',category='packaging',price=200,minimum=10),app.SEED['cities'])
            data=app.accounts.dashboard(db,user)
            pid=data['products'][0]['id']
            self.assertEqual(app.accounts.dashboard(db,other)['products'],[])
        request=app.create_request(dict(contact='buyer@example.com',requestKey='seller-request-123456',items=[dict(productId=pid,makerId=user['maker_id'],qty=10,destination='almaty',mode='pickup'),self.item]))
        with app.connect() as db:
            view=app.accounts.dashboard(db,user)['requests'][0]
            self.assertEqual(len(view['items']),1)
            self.assertEqual(view['total'],2000)
            self.assertEqual(app.accounts.dashboard(db,other)['requests'],[])
            with self.assertRaises(PermissionError):app.accounts.mutate(db,other,'/api/seller/status',dict(requestId=request['id'],status='completed'),app.SEED['cities'])
            app.accounts.mutate(db,user,'/api/seller/status',dict(requestId=request['id'],status='processing'),app.SEED['cities'])
        with app.connect() as db:self.assertEqual(app.accounts.dashboard(db,user)['requests'][0]['status'],'processing')
    def test_profile_does_not_edit_other_company(self):
        user,_,body=self.register()
        other,_,_=self.register('other@example.com')
        with app.connect() as db:
            app.accounts.mutate(db,user,'/api/seller/profile',{**body,'name':'Changed','maker_id':other['maker_id']},app.SEED['cities'])
            self.assertEqual(app.accounts.dashboard(db,other)['manufacturer']['name'],'Test Factory')
            with self.assertRaises(ValueError):app.accounts.mutate(db,user,'/api/seller/profile',{**body,'sourceUrl':'javascript:alert(1)'},app.SEED['cities'])
