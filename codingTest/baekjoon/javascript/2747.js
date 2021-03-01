var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

rl.on("line", line => {
  var n = +line;
  var a = 0;
  var b = 1;
  while (n--) {
    var temp = b;
    b = a + b;
    a = temp;
  }
  console.log(a);
}).on("close", () => {});
