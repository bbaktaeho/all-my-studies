const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const [N, K] = input
    .shift()
    .split(" ")
    .map(e => +e);
  const arr = new Array(N).fill(1).map((e, i) => e + i);
  const result = [];
  let i = 0;
  while (arr.length != 0) {
    i = (i + K - 1) % arr.length;
    result.push(arr.splice(i, 1)[0]);
  }
  console.log("<" + result.toString().replace(/,/g, ", ") + ">");
});
