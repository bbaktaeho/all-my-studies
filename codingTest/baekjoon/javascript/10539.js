const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const b = input[1].split(' ').map(e => +e);
  const result = [b[0]];
  for (let i = 1; i < b.length; i++)
    result.push(b[i] * (i + 1) - result.reduce((acc, a) => acc + a));
  console.log(result.join(' '));
});
