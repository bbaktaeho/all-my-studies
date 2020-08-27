const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

var list = [];
rl.on("line", (input) => {
  list.push(input);
}).on("close", () => {
  list.shift();
  sorted(list);
});

function sorted(list) {
  var result = [];
  list.forEach((e) => {
    let [x, y] = e.split(" ");
    result.push(x);
    result.push(y);
  });
  result.sort((a, b) => a - b);
  for (let i = 0; i < result.length; i += 2) {
    console.log(`${result[i]} ${result[i + 1]}`);
  }
}
