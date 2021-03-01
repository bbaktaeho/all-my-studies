const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const N = +input[0];
  console.log(factorial(N));
});

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
