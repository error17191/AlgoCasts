// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseString = require('../reversestring');

function reverseInt(n) {
    // let sign = n >= 0 ? 1 : -1;
    return Math.sign(n) * parseInt(reverseString(Math.abs(n).toString()));
}

reverseInt(-100);

module.exports = reverseInt;
