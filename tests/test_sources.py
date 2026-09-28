import json
import unittest
import test_api
from urllib.parse import urlsplit
app=test_api.app

class SourceTests(unittest.TestCase):
    setUp=test_api.ApiTests.setUp
    tearDown=test_api.ApiTests.tearDown
    def test_sources_preserve_unknown_values(self):
        app.initialize()
        with app.connect() as db:
            rows=[json.loads(r[0]) for r in db.execute('SELECT payload FROM source_listings')]
        self.assertEqual(len(rows),6)
        self.assertEqual(len({r['company'] for r in rows}),5)
        self.assertEqual(sum(r['priceFrom'] is None for r in rows),4)
        for r in rows:
            self.assertFalse(r['legalVerified'])
            self.assertFalse(r['partner'])
            self.assertEqual(urlsplit(r['sourceUrl']).scheme,'https')
        self.assertEqual(len(app.catalog()['products']),8)
        with self.assertRaises(ValueError):
            app.quote([dict(productId='kpu-box',makerId='KPU',qty=500,destination='almaty',mode='standard')])
    def test_static_snapshot_matches_database_seed(self):
        raw=(app.ROOT/'sources-data.js').read_text().split('const SOURCE_SNAPSHOT = ',1)[1].strip().removesuffix(';')
        self.assertEqual(json.loads(raw),json.loads((app.ROOT/'server/sources.json').read_text()))
