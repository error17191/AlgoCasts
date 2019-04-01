// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     let size = n * 2 - 1;
//     for (let i = 1; i <= n; i++) {
//         let line = '';
//         for (let j = 1; j <= size; j++) {
//             if (j <= n - i || j >= n + i) {
//                 line += ' ';
//             } else {
//                 line += '#';
//             }
//         }
//         console.log(line);
//     }
// }

function pyramid(n, row = 1, column = 1, line = '') {
    if (row > n) {
        return;
    }

    if (column > n * 2 - 1) {
        console.log(line);
        return pyramid(n, row + 1)
    }

    // if (column <= n - row || column >= n + row) {
    //     line += ' ';
    // } else {
    //     line += '#';
    // }
    line += column <= n - row || column >= n + row ? ' ' : '#';
    pyramid(n, row, column + 1, line);
}

pyramid(3);
console.log('-----------------------');
pyramid(6);
module.exports = pyramid;
