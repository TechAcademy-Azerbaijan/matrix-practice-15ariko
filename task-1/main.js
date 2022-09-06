// Use this matrix for solution
let matrix = [
    [4, -2, 5],
    [1, -4, -12],
let sum = 0;
let count = 0;
for (let q = 0; q < matrix.length; q++) {
  for (let t = 0; t < matrix[q].length; t++) {
    if (matrix[q][t] < 0 && matrix[q][t] % 2 == 0) {
      count++;
      sum += matrix[q][t];
    }
  }
}
console.log(`${count}\n${sum}`);
