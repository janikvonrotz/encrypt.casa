from urllib.parse import urlparse
url = urlparse('http://www.example.com')
print("Protokoll: " + url.scheme)
print("Hostname: " + url.hostname)