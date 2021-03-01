const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  let s = input[0];
  const pattern = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  for (const p of pattern) s = s.replace(RegExp(`${p}`, "g"), "0");
  console.log(s.length);
});
