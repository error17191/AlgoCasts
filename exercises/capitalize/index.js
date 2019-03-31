// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// function capitalize(str) {
//     return str.split(/\s/).map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// }

// function capitalize(str) {
//     let capitalized = str[0].toUpperCase();
//     let capitalize = false;
//     for(let char of str.slice(1)){
//         if(char !== ' ' && capitalize){
//             capitalized += char.toUpperCase();
//             capitalize = false;
//             continue;
//         }
//         if(char == ' '){
//             capitalize = true;
//         }
//         capitalized +=char;
//     }
//
//     return capitalized;
// }

function capitalize(str) {
    let capitalized = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == ' ') {
            capitalized += str[i].toUpperCase();
            continue;
        }
        capitalized += str[i];
    }

    return capitalized;
}

module.exports = capitalize;
