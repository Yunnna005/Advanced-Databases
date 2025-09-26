import csv
import requests
import json

couchdb_url = "http://admin:admin@host.docker.internal:5984"
db_name = "coffee_shop"

requests.put(f"{couchdb_url}/{db_name}")

with open("Dataset/coffee_sales_updated.csv", newline="", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    docs = list(reader)

bulk = {"docs": docs}
resp = requests.post(f"{couchdb_url}/{db_name}/_bulk_docs",
                     headers={"Content-Type": "application/json"},
                     data=json.dumps(bulk))

print(resp.json())