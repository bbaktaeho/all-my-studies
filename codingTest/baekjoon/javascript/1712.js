const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputData;
rl.on('line', input => {
  inputData = input;
}).on('close', () => {
  const [fix, cost, price] = inputData.split(' ').map(e => +e);
  if (cost >= price) console.log(-1);
  else console.log(Math.floor(fix / (price - cost)) + 1);
});
