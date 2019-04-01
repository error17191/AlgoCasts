// // --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// inc col until 4
// inc row until 4
// dec col until 1
// dec row until 2
// inc col until 3
// inc row until 3
// dec col until 2

// 1,1
// 1,2
// 1,3
// 1,4
// 2,4
// 3,4
// 4,4
// 4,3
// 4,2
// 4,1
// 3,1
// 2 ,1
// 2 ,2
// 2,3
// 3,3
// 3,2

function matrix(n) {
    let row, col, directionIndicator, stepsIndicator, steps, matrix, num;
    row = 0;
    col = -1;
    num = directionIndicator = stepsIndicator = 1;
    matrix = [];
    for (let round = 1; round <= 2 * n - 1; round++) {
        if (round == 1) {
            steps = n;
        } else if (stepsIndicator == 1) {
            steps--;
            stepsIndicator++;
        } else if (stepsIndicator == 2) {
            stepsIndicator = 1;
        }

        for (let step = 1; step <= steps; step++) {
            switch (directionIndicator) {
                case 1:
                    col++;
                    break;
                case 2:
                    row++;
                    break;
                case 3:
                    col--;
                    break;
                case 4:
                    row--;
                    break;
            }

            if (!matrix[row]) {
                matrix[row] = [];
            }

            matrix[row][col] = num++;
        }
        directionIndicator = directionIndicator == 4 ? 1 : directionIndicator + 1;
    }
    return matrix;
}

console.log(matrix(5));
console.log('----------------------------------');
console.log(matrix(7));
module.exports = matrix;
