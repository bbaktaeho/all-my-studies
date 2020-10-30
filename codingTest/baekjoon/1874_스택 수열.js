const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const inputs = [];
rl.on('line', i => {
  inputs.push(i);
}).on('close', solution);

function solution() {
  const list = inputs.map(e => +e);
  const N = list.shift();
  let listIndex = 0;
  const stack = [];
  const result = [];
  for (let item = 1; item <= N; item++) {
    stack.push(item);
    result.push('+');
    while (listIndex < N && stack[stack.length - 1] == list[listIndex]) {
      stack.pop();
      listIndex++;
      result.push('-');
    }
  }
  if (stack.length) console.log('NO');
  else console.log(result.join('\n'));
}
