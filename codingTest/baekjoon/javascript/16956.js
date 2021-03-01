let rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

let input = [];
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  let ck = false;
  let [r, c] = input
    .shift()
    .split(" ")
    .map(e => +e);
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (input[i][j] == "W") {
        for (let n = 0; n < 4; n++) {
          let newI = i + dx[n];
          let newJ = j + dy[n];
          if (newI < 0 || newI >= r || newJ < 0 || newJ >= c) continue;
          if (input[newI][newJ] == "S") ck = true;
        }
      }
    }
  }
  if (ck) console.log(0);
  else {
    let result = "";
    console.log(1);
    input.some(e => {
      result += e.replace(/\./g, "D") + "\n";
    });
    console.log(result);
  }
});
