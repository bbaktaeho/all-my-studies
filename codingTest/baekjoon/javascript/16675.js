var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  var [ML, MR, TL, TR] = input[0].split(" ").map(e => "SRP".indexOf(e));
  if (ML == MR && (TL == (ML + 1) % 3 || TR == (ML + 1) % 3)) console.log("TK");
  else if (TL == TR && (ML == (TL + 1) % 3 || MR == (TL + 1) % 3)) console.log("MS");
  else console.log("?");
});
