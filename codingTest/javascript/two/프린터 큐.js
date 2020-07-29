const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var inputs = [];
rl.on("line", (input) => {
  inputs.push(input);
}).on("close", () => {
  printerQueue(inputs);
  process.exit();
});

function printerQueue(inputs) {
  inputs.shift();
  var result = [];
  for (let i = 0; i < inputs.length; i += 2) {
    var NM = inputs[i].split(" ").map((e) => Number(e));
    var importance = inputs[i + 1].split(" ").map((e, i) => ({ i: i, v: Number(e) }));
    var count = 1;

    while (importance.length > 0) {
      var max = Math.max(...importance.map((e) => e.v));
      if (max == importance[0].v && NM[1] == importance[0].i) {
        result.push(count);
        break;
      } else if (max == importance[0].v) {
        importance.shift();
        count++;
      } else importance.push(importance.shift());
    }
  }
  result.forEach((e) => console.log(e));
}
