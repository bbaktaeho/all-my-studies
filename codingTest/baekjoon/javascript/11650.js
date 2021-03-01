var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var list = [];
rl.on("line", line => {
  list.push(line.split(" "));
}).on("close", () => {
  list.shift();
  list.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  var result = "";
  list.forEach(e => (result += e.join(" ") + "\n"));
  console.log(result);
});
