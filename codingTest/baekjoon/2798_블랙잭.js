const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const list = [];
rl.on('line', input => {
  list.push(input);
}).on('close', solution);

function solution() {
  const [N, M] = list[0].split(' ');
  const arr = list[1].split(' ').map(e => +e);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        if (sum <= +M) result = Math.max(result, sum);
      }
    }
  }
  console.log(result);
}
