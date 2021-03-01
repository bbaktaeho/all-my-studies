const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  input.shift();
  for (let s of input) {
    let stack = 0;
    for (let c of s) {
      if (stack < 0) break;
      c == "(" ? stack++ : stack--;
    }
    if (stack == 0) console.log("YES");
    else console.log("NO");
  }
});
