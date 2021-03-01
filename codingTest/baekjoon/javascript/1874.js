var inp = require("fs").readFileSync("/dev/stdin").toString().split("\n");

var N = +inp.shift();
var stack = [];
var result = "";
var count = 0;
for (let i = 1; i <= N; i++) {
  stack.push(i);
  result += "+\n";
  while (count < N && stack[stack.length - 1] == +inp[count]) {
    stack.pop();
    count++;
    result += "-\n";
  }
}
if (stack.length) console.log("NO");
else console.log(result);
