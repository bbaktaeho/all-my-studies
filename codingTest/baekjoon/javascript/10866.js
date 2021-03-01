var inp = require("fs").readFileSync("/dev/stdin").toString().split("\n");

var stack = [];
var result = "";
for (var i = 1; i < inp.length; i++) {
  var arr = inp[i].split(" ");
  var len = stack.length;
  if (arr[0] == "push_front") stack.unshift(arr[1]);
  if (arr[0] == "push_back") stack.push(arr[1]);
  else if (arr[0] == "pop_front") result += (len == 0 ? -1 : stack.shift()) + "\n";
  else if (arr[0] == "pop_back") result += (len == 0 ? -1 : stack.pop()) + "\n";
  else if (arr[0] == "size") result += len + "\n";
  else if (arr[0] == "empty") result += (len == 0 ? 1 : 0) + "\n";
  else if (arr[0] == "front") result += (len == 0 ? -1 : stack[0]) + "\n";
  else if (arr[0] == "back") result += (len == 0 ? -1 : stack[len - 1]) + "\n";
}
console.log(result);
