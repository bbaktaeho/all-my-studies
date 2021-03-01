const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  input = input[1].split(' ');
  input = input.map(e => +e);
  console.log(Math.max(...input) - Math.min(...input));
});
