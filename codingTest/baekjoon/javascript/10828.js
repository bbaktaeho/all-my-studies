let inp = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let stack = [];
let result = "";
for (let i = 1; i < inp.length; i++) {
  let arr = inp[i].split(" ");
  let len = stack.length;
  if (arr[0] == "push") stack.push(arr[1]);
  else if (arr[0] == "pop") result += (len == 0 ? -1 : stack.pop()) + "\n";
  else if (arr[0] == "size") result += len + "\n";
  else if (arr[0] == "empty") result += (len == 0 ? 1 : 0) + "\n";
  else if (arr[0] == "top") result += (len == 0 ? -1 : stack[len - 1]) + "\n";
}

console.log(result);
