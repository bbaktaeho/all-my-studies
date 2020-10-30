const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputs = [];
rl.on('line', i => {
  inputs.push(i);
}).on('close', () => {
  const rotation = inputs.shift();
  testCase(rotation, inputs);
});
function testCase(r, inputs) {
  while (r--) {
    const location = inputs.shift().split(' ')[1];
    const arr = inputs
      .shift()
      .split(' ')
      .map(e => +e);
    console.log(solution(location, arr));
  }
}
function solution(location, arr) {
  let max = Math.max(...arr);
  arr = arr.map((e, i) => [i, e]);
  let count = 1;
  while (true) {
    if (max == arr[0][1] && location == arr[0][0]) return count;
    else if (max == arr[0][1]) {
      count++;
      arr.shift();
      max = Math.max(...arr.map(e => e[1]));
    } else arr = [...arr.slice(1), arr[0]];
  }
}
