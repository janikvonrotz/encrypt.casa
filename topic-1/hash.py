from hashlib import sha256
text = 'Hallo Bob, was hast du heute Abend vor? Wir könnten ins Kino gehen. Alice'
fingerabdruck = sha256(bytes(text, 'iso8859-1')).hexdigest()
print(fingerabdruck)

# Nun verändern wir den Text
text = text.replace('Alice', 'Eve')
fingerabdruck = sha256(bytes(text, 'iso8859-1')).hexdigest()
print(fingerabdruck)
