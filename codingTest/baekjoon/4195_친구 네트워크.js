const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const list = [];
rl.on('line', input => {
  list.push(input);
}).on('close', () => {
  const rotation = list.shift();
  testCase(rotation, list);
});

function testCase(r, arr) {
  while (r--) {
    const f = Number(arr.shift());
    solution(arr.splice(0, f));
  }
}
function solution(arr) {
  const network = new Map();
  arr.some(e => {
    [x, y] = e.split(' ');
    if (!network.has(x)) network.set(x, 1);
    if (!network.has(y)) network.set(y, 1);
    const num = network.get(x) + network.get(y);
    network.set(x, num);
    network.set(y, num);
    console.log(num);
  });
}
