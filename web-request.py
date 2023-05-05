import requests
response = requests.get("https://www.example.com")
print(response.url)
print(response.headers)
print(response.text)