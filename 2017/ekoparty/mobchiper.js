let cipherflag = 'sdvejusrskmgmwpzwyznsrhbcivhhtkski';
// print the flag
console.log(doCrypt());

/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
function doCrypt() {
    let result;
    let key = 'Eko2017Passphrase'
    key = filterKey(key)
    for (let i = 0; i < key.length; i++)
        key[i] = (26 - key[i]) % 26;
    console.log(cipherflag, key);
    result = crypt(cipherflag, key);
    return 'EKO{' + result + '}';
}
/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
function crypt(input, key) {
    let output = "";
    for (let i = 0, j = 0; i < input.length; i++) {
        let c = input.charCodeAt(i);
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
function isUppercase(c) {
    return 65 <= c && c <= 90;
}
/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
function isLowercase(c) {
    return 97 <= c && c <= 122;
}
/**
 * the code in this function contains code from https://ctf.ekoparty.org
 */
function filterKey(key) {
    let result = [];
    for (let i = 0; i < key.length; i++) {
        let c = key.charCodeAt(i);
        if (isLetter(c) && ((c - 65) % 32) != 15)
            result.push((c - 65) % 32);
    }
    return result;
}

function isLetter(c) {
    return isUppercase(c) || isLowercase(c);
}