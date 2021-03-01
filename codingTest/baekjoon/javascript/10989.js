var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var flag = true;
var arr = new Array(10001).fill(0);
rl.on("line", line => {
  if (flag) flag = false;
  else arr[line] += 1;
}).on("close", () => {
  for (let i = 0; i < 10001; i++) if (arr[i] != 0) while (arr[i]--) console.log(i);
});
