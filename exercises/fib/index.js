// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//
//     if (n == 2) {
//         return 1;
//     }
//
//     let current = 1;
//     let last = 0;
//
//     for (let i = 3; i <= n; i++) {
//         let temp = current;
//         current += last;
//         last = temp;
//     }
//
//     return current + last;
// }
//
// function fib(n) {
//     if(n < 2){
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// function fib(n, fibs = []) {
//     if (n < 2) {
//         return n;
//     }
//     if (!fibs[n - 1]) {
//         fibs[n - 1] = fib(n - 1, fibs);
//     }
//     if (!fibs[n - 2]) {
//         fibs[n - 2] = fib(n - 2, fibs);
//     }
//     return fibs[n - 1] + fibs[n - 2];
// }

function memoize(fn) {
    const cache = [];
    return function (n) {
        return cache[n] ? cache[n] : cache[n] = fn(n);
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);


module.exports = fib;
