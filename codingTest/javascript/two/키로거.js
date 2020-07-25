const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

var inputList = [];
rl.on("line", (input) => {
  inputList.push(input);
}).on("close", () => {
  keyLogger(inputList);
  process.exit();
});

function keyLogger(list) {
  var testCase = Number(list.shift());
  var result = [];
  for (let str of list) {
    var left = [];
    var right = [];
    for (let char of str) {
      switch (char) {
        case "<":
          if (left.length != 0) right.push(left.pop());
          break;
        case ">":
          if (right.length != 0) left.push(right.pop());
          break;
        case "-":
          if (left.length != 0) left.pop();
          break;
        default: {
          left.push(char);
          break;
        }
      }
    }
    result.push(left.concat(right.reverse()).join(""));
  }
  result.forEach((e) => console.log(e));
}
