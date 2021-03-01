const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  let s = input[0];
  const numArr = s.match(/-?\d+/g).map(e => +e);
  let minusIdx = numArr.findIndex(e => e < 0);
  if (minusIdx == -1) minusIdx = numArr.length;
  let sum = 0;
  for (let i = 0; i < minusIdx; i++) sum += numArr[i];
  let minusSum = 0;
  for (let i = minusIdx; i < numArr.length; i++) minusSum += Math.abs(numArr[i]);
  console.log(sum - minusSum);
});
