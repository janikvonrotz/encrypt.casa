import socket
hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)
print("Hostname ist:" + hostname)
print("IP-Adresse ist:" + ip_address)
