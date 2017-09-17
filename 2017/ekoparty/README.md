# [EKOPARTY CTF 2017](https://ctf.ekoparty.org/)
## Reversing
### Rhapsody
It is an ELF 64-bit executable.  
At 0x401378 we see a lot of conditional jumps with a repeating pattern:
- call a function
- 'fail' if it returns 0

Each function compares one character from input with one character in the range [0x4a2739-0x4a275d].  
We get the flag writing down each character in order 
### MobCipher
We are asked to dump a flag from an .apk file.  
Unzipping the file we see that this is a cordova/ionic app.  
Let's look for the flag searching for `EKO` in the assets.
We find these lines in `assets/www/build/main.js`
```javascript
        ...
        this.cipherflag = 'sdvejusrskmgmwpzwyznsrhbcivhhtkski';
        this.falseflag = 'EKO{this is not the flag}';
        ...
        this.plainflag = 'EKO{' + result + '}';
        ...
        ... [rootParams]="{\'p1\': \'Eko2017Passphrase\' ...
```
Looking at the source code we see the decryption function used and guess that:
- the encrypted flag is `sdvejusrskmgmwpzwyznsrhbcivhhtkski`
- decryption key is `Eko2017Passphrase`


Solution source code can be found in [mobchiper.js](mobchiper.js)
