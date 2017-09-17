# [EKOPARTY CTF 2017](https://ctf.ekoparty.org/)
## Reversing
### MobCipher
We are asked to dump a flag from an .apk file.  
Unzipping the file we see that it is a cordova/ionic app.  
We look for the flag searching for the string `EKO`.
We find these lines in `assets/www/build/main.js`
```javascript
        ...
        this.cipherflag = 'sdvejusrskmgmwpzwyznsrhbcivhhtkski';
        this.falseflag = 'EKO{this is not the flag}';
        ...
        this.plainflag = 'EKO{' + result + '}';
        ...
        ... [rootParams]="{\'p1\': \'Eko2017Passphrase\'" ...
```
Looking at the source code we see the decryption function used and guess that:
- the encrypted flag is `sdvejusrskmgmwpzwyznsrhbcivhhtkski`
- decryption key is `Eko2017Passphrase`


Solution source code can be found in [mobchiper.js](mobchiper.js)
