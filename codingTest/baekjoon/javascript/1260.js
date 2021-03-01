const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  var [n, m, v] = input
    .shift()
    .split(" ")
    .map(e => +e);
  var arr = Array.from(Array(n + 1), () => []);
  input.some(e => {
    var [x, y] = e.split(" ").map(e => +e);
    arr[x].push(y);
    arr[y].push(x);
  });
  for (let i of arr) i.sort((a, b) => a - b);
  let visited = new Array(n + 1).fill(false);
  let dfsResult = "";
  let bfsResult = "";
  const dfs = v => {
    if (visited[v]) return;
    visited[v] = true;
    dfsResult += v + " ";
    for (let i of arr[v]) dfs(i);
  };
  const bfs = v => {
    let q = [v];
    while (q.length) {
      let item = q.shift();
      if (visited[item]) continue;
      visited[item] = true;
      bfsResult += item + " ";
      for (let i of arr[item]) q.push(i);
    }
  };
  dfs(v);
  visited = new Array(n + 1).fill(false);
  bfs(v);
  console.log(dfsResult);
  console.log(bfsResult);
});
