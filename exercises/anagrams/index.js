// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function prepareStringForAnagrams(str) {
//     return str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
// }
//
// function anagrams(stringA, stringB) {
//     return prepareStringForAnagrams(stringA) == prepareStringForAnagrams(stringB);
// }

// function anagrams(stringA, stringB) {
//     return stringA.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('')
//             == stringB.toLowerCase().replace(/[^a-z]/g,'').split('').sort().join('')
// }

// function anagrams(stringA, stringB) {
//     let aMap = {};
//     let bMap = {};
//     for (let char of stringA.toLowerCase()) {
//         if (char >= 'a' && char <= 'z') {
//             aMap[char] = aMap[char] + 1 || 1;
//         }
//     }
//
//     for (let char of stringB.toLowerCase()) {
//         if (char >= 'a' && char <= 'z') {
//             bMap[char] = bMap[char] + 1 || 1;
//         }
//     }
//
//     for (let char in aMap) {
//         if (aMap[char] !== bMap[char]) {
//             return false;
//         }
//         delete bMap[char];
//     }
//
//     for (let char in bMap) {
//         return false;
//     }
//
//     return true;
// }
//
// function anagrams(stringA, stringB) {
//     let aMap = buildCharMap(stringA);
//     let bMap = buildCharMap(stringB);
//
//     for (let char in aMap) {
//         if (aMap[char] !== bMap[char]) {
//             return false;
//         }
//         delete bMap[char];
//     }
//
//     for (let char in bMap) {
//         return false;
//     }
//
//     return true;
// }

function anagrams(stringA, stringB) {
    let aMap = buildCharMap(stringA);
    let bMap = buildCharMap(stringB);
    if (Object.keys(aMap).length !== Object.keys(bMap).length) {
        return false;
    }
    for (let char in aMap) {
        if (aMap[char] !== bMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    let map = {};
    for (let char of str.toLowerCase().replace(/[/W]/g, '')) {
        map[char] = map[char] + 1 || 1;
    }

    return map;
}

module.exports = anagrams;
