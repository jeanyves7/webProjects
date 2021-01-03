import json
import requests

url = "https://sentiment-api99.herokuapp.com/sentiment"


x = input("Enter feedback: ")
obj = {'action': {'type': 'HEROKU_FEED', 'payload': {'feedback': x}}}
response_json = requests.post(url, data = json.dumps(obj))

print(response_json.text)