
// You should implement your task here.

module.exports = function towelSort (matrix) {
   if (Array.isArray(matrix) === false) {
        return result;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 1 || i === 1) {
                result.push(matrix[i].reverse());
            } else {
                result.push(matrix[i]);
            }
        }
        return result.flat();
    }
}
