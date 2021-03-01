var inp = require("fs").readFileSync("/dev/stdin").toString().split("\n");

var [a, b, c] = inp[0].split(" ");
if (a == b && b == c) console.log(10000 + a * 1000);
else if (a == b || a == c) console.log(1000 + a * 100);
else if (b == c) console.log(1000 + b * 100);
else console.log(Math.max(a, b, c) * 100);

// var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

// var input = [];
// rl.on("line", line => {
//   input.push(line);
// }).on("close", () => {
//   var [a, b, c] = input[0].split(" ");
//   if (a == b && b == c) console.log(10000 + a * 1000);
//   else if (a == b || a == c) console.log(1000 + a * 100);
//   else if (b == c) console.log(1000 + b * 100);
//   else console.log(Math.max(a, b, c) * 100);
// });
