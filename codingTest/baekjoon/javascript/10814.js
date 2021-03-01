var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var list = [];
rl.on("line", line => {
  list.push(line.split(" "));
}).on("close", () => {
  list.shift();
  list.sort((a, b) => a[0] - b[0]);
  for (var i = 0; i < list.length; i++) console.log(list[i][0], list[i][1]);
});
