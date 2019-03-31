// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let countMap = {};
    for (let char of str) {
        countMap[char] = countMap[char] + 1 || 1;
    }

    let maxChar = '';
    let maxCount = 0;

    for (let char in countMap) {
        if(countMap[char] > maxCount){
            maxChar = char;
            maxCount = countMap[char];
        }
    }

    return maxChar;
}


module.exports = maxChar;
