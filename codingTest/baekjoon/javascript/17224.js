const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const [N, L, K] = input
    .shift()
    .split(" ")
    .map(e => +e);
  let easy = 0,
    hard = 0;
  for (let i = 0; i < N; i++) {
    const [sub1, sub2] = input
      .shift()
      .split(" ")
      .map(e => +e);
    if (sub2 <= L) hard++;
    else if (sub1 <= L) easy++;
  }
  console.log(Math.min(hard, K) * 140 + (hard < K ? Math.min(K - hard, easy) * 100 : 0));
});
