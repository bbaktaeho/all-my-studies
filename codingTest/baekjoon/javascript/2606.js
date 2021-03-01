const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  let N = +input.shift();
  let M = input.shift();
  const arr = Array.from(Array(N + 1), () => []);
  input.some(e => {
    let [x, y] = e.split(" ");
    arr[x].push(y);
    arr[y].push(x);
  });
  const visited = new Array(N + 1).fill(false);
  cnt = -1;
  const dfs = v => {
    if (v < 0 || v > N || visited[v]) return;
    visited[v] = true;
    cnt++;
    for (let i of arr[v]) dfs(i);
  };
  dfs(1);
  console.log(cnt);
});
