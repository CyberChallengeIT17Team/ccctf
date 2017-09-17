let cipherflag = 'sdvejusrskmgmwpzwyznsrhbcivhhtkski'

/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
function doCrypt() {
    var result;
    let key = 'Eko2017Passphrase'
    key = filterKey(key)
    for (var i = 0; i < key.length; i++)
        key[i] = (26 - key[i]) % 26;
    console.log(cipherflag, key)
    result = crypt(cipherflag, key);
    return 'EKO{' + result + '}';
}
/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
function crypt(input, key) {
    var output = "";
    for (var i = 0, j = 0; i < input.length; i++) {
        var c = input.charCodeAt(i);
        if (isUppercase(c)) {
            output += String.fromCharCode((c - 65 + key[j % key.length]) % 26 + 65);
            j++;
        }
        else if (isLowercase(c)) {
            output += String.fromCharCode((c - 97 + key[j % key.length]) % 26 + 97);
            j++;
        }
        else {
            output += input.charAt(i);
        }
        console.log(output, i, j)
    }
    return output;
}
/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
isUppercase = c => 65 <= c && c <= 90
/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
isLowercase = c => 97 <= c && c <= 122
/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
function filterKey(key) {
    var result = [];
    for (var i = 0; i < key.length; i++) {
        var c = key.charCodeAt(i);
        if (isLetter(c) && ((c - 65) % 32) != 15)
            result.push((c - 65) % 32);
    }
    return result;
}
function isLetter(c) {
    return isUppercase(c) || isLowercase(c);
}
console.log(doCrypt())