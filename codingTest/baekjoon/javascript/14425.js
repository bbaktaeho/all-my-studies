const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  let [N] = input.shift().split(" ");
  const S = new Set();
  let count = 0;
  while (N--) S.add(input.shift());
  for (const i of input) if (S.has(i)) count++;
  console.log(count);
});
