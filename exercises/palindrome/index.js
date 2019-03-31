// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// const reverse = require('../reversestring');
//
// function palindrome(str) {
//     return str == reverse(str);
// }

// function palindrome(str) {
//     return str.split('').every((ch, index, arr) => ch == arr[arr.length - 1 - index]);
// }
//
function palindrome(str) {
    let limit = Math.floor(str.length / 2);

    for (let i = 0; i < limit; i++) {
        if(str[i] !== str[str.length  - 1 - i]){
            return false;
        }
    }

    return true;
}



// palindrome('opo');

module.exports = palindrome;
