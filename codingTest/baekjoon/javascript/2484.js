function money(list) {
  list.sort((a, b) => a - b);
  var set = new Set(list);
  if (set.size == 1) return 50000 + list[0] * 5000;
  if (set.size == 2) return list[1] == list[2] ? 10000 + list[1] * 1000 : 2000 + list[1] * 500 + list[2] * 500;
  if (set.size == 3) for (let i in list) if (list[i] == list[+i + 1]) return 1000 + list[i] * 100;
  return list[3] * 100;
}
var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  let result = [];
  for (let i = 1; i < input.length; i++) result.push(money(input[i].split(" ")));
  console.log(Math.max(...result));
});
