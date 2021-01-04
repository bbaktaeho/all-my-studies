const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const list = [];
rl.on('line', input => {
  list.push(input);
}).on('close', () => {
  [a, arr1, b, arr2] = list;
  const A = arr1.split(' ').map(e => +e);
  const B = arr2.split(' ').map(e => +e);
  solution(A, B);
});

function solution(A, B) {
  const setA = new Set(A);
  B.some(e => {
    if (setA.has(e)) console.log(1);
    else console.log(0);
  });
}
