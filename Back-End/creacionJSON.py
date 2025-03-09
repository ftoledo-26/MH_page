import requests as req
import json

URL = "https://mhw-db.com/monsters"

req.get(URL)
response = req.get(URL)
data = response.json()
open("monsters.json", "w").write(json.dumps(data, indent=4))