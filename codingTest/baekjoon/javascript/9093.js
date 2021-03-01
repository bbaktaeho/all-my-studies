let rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

let input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  let result = "";
  for (let i = 1; i < input.length; i++) {
    result +=
      input[i]
        .split(" ")
        .map(e => e.split("").reverse().join(""))
        .join(" ") + "\n";
  }
  console.log(result);
});
