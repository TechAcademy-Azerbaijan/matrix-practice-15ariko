// Use this matrix for solution

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
];

let r = 3;
let c = 2;

for (let i = 0; i < r.length; i++) {
  const element = matrix[i];
  for (let j = 0; j < c.length; j++) {
    const element2 = element[j];
    for (let b = 1; b < c; b++) {
      const element3 = element[b];
      console.log(`${element2} ${element3}`);
    }
  }
}
