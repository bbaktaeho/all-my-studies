const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
let list;
rl.on('line', input => {
  list = input.split(' ');
}).on('close', solution);

function solution() {
  let descending = true;
  let ascending = true;
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i] > list[i + 1]) ascending = false;
    if (list[i] < list[i + 1]) descending = false;
  }
  if (descending) console.log('descending');
  else if (ascending) console.log('ascending');
  else console.log('mixed');
}
