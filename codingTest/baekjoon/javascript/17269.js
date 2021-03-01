const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const alpha = [3, 2, 1, 2, 4, 3, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];
  const [N, M] = input[0].split(' ').map(e => +e);
  const [name1, name2] = input[1].split(' ');
  let total = '';
  const minLength = Math.min(N, M);
  for (let i = 0; i < minLength; i++) total += name1[i] + name2[i];
  total += name1.slice(minLength) + name2.slice(minLength);
  total = total.split('').map(e => alpha[e.charCodeAt() - 65]);
  for (let i = 0; i < total.length - 2; i++) {
    for (let j = 0; j < total.length - 1 - i; j++) total[j] += total[j + 1];
  }
  console.log((total[0] % 10) * 10 + (total[1] % 10) + '%');
});
