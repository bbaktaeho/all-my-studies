const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  let total = 0;
  let bonus = 0;
  for (const i in input[1]) {
    if (input[1][i] == 'O') {
      total += +i + 1 + bonus;
      bonus++;
    } else bonus = 0;
  }
  console.log(total);
});
