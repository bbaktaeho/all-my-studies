var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  input.reverse();
  var t = +input.pop();
  while (t--) {
    var [m, n, k] = input
      .pop()
      .split(" ")
      .map(e => +e);
    var board = Array.from(Array(n), () => new Array(m).fill(0));
    while (k--) {
      var [y, x] = input.pop().split(" ");
      board[x][y] = 1;
    }
    var visited = Array.from(Array(n), () => new Array(m).fill(false));
    var dfs = (x, y) => {
      if (x < 0 || x >= n || y < 0 || y >= m) return;
      if (!board[x][y] || visited[x][y]) return;
      visited[x][y] = true;
      dfs(x - 1, y);
      dfs(x + 1, y);
      dfs(x, y - 1);
      dfs(x, y + 1);
    };
    var cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (board[i][j] && !visited[i][j]) {
          dfs(i, j);
          cnt++;
        }
      }
    }
    console.log(cnt);
  }
});
