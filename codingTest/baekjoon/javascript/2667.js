const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const N = +input.shift();
  const arr = input.map(e => Array.from(e, x => +x));
  const visit = Array.from(Array(N), _ => Array(N).fill(false));

  const dngs = [];
  let dng = 0;
  let cnt = 0;

  const dfs = (x, y) => {
    if (x < 0 || x >= N || y < 0 || y >= N) return;
    if (!arr[x][y] || visit[x][y]) return;
    visit[x][y] = true;
    dng++;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
  };

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] && !visit[i][j]) {
        cnt++;
        dfs(i, j);
        dngs.push(dng);
        dng = 0;
      }
    }
  }
  console.log(cnt);
  dngs.sort((a, b) => a - b).forEach(e => console.log(e));
});
