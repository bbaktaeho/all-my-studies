const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputData;
rl.on('line', input => {
  inputData = input;
}).on('close', () => {
  const [a, b, v] = inputData.split(' ').map(e => +e);
  console.log(Math.floor((v - b - 1) / (a - b)) + 1);
});
