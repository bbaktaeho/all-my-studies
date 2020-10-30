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

function testCase(r, list) {
  while (r--) console.log(solution(list.shift().split('')));
}

function solution(list) {
  const leftStack = [];
  const rightQueue = [];
  list.some(e => {
    if (e == '<' && leftStack.length) rightQueue.push(leftStack.pop());
    else if (e == '>' && rightQueue.length) leftStack.push(rightQueue.pop());
    else if (e == '-' && leftStack.length) leftStack.pop();
    else if (e != '<' && e != '>' && e != '-') leftStack.push(e);
  });
  return leftStack.concat(rightQueue.reverse()).join('');
}
