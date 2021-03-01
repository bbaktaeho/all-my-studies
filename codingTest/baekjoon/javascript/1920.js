var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
var list = [];
rl.on('line', input => {
  list.push(input);
}).on('close', () => {
  [a, arr1, b, arr2] = list;
  var A = arr1.split(' ').map(e => +e);
  var B = arr2.split(' ').map(e => +e);
  solution(A, B);
});

function solution(A, B) {
  var setA = new Set(A);
  for (var i of B) setA.has(i) ? console.log(1) : console.log(0);
}
