const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on("line", function (line) {
  inputs.push(line);
}).on("close", function () {
  solution(inputs);
  process.exit();
});

function solution(inputs) {
  const n = parseInt(inputs.splice(0, 1), 10);

  const stackArr = [];
  const result = [];
  let count = 1;
  let success = true;

  for (let i = 0; i < n; i++) {
    let data = parseInt(inputs[i], 10);

    for (; count <= data; count++) {
      stackArr.push(count);
      result.push("+");
    }

    if (stackArr[stackArr.length - 1] === data) {
      stackArr.pop();
      result.push("-");
    } else {
      success = false;
      break;
    }
  }

  if (success) {
    console.log(result.join("\n"));
  } else {
    console.log("NO");
  }
}
