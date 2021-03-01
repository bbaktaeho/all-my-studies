var rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  var n = +input.shift();
  var board = input.map(e => e.split(" ").map(ee => +ee));
  var getPrice = flowerList => {
    var dx = [-1, 1, 0, 0];
    var dy = [0, 0, -1, 1];
    var fPrice = 0;
    var check = new Set();
    flowerList.some(e => {
      var x = Math.floor(e / n);
      var y = e % n;
      fPrice += board[x][y];
      check.add(`${x},${y}`);
      for (let d in dx) {
        var newX = x + dx[d];
        var newY = y + dy[d];
        if (newX < 0 || newX >= n || newY < 0 || newY >= n) continue;
        check.add(`${newX},${newY}`);
        fPrice += board[newX][newY];
      }
    });
    return check.size != 15 ? 3001 : fPrice;
  };
  var price = 3001;
  for (let i = 0; i < n ** 2; i++) for (let j = i + 2; j < n ** 2; j++) for (let k = j + 2; k < n ** 2; k++) price = Math.min(price, getPrice([i, j, k]));
  console.log(price);
});

var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
var n = +input.shift();
var board = input.map(e => e.split(" ").map(ee => +ee));
var getPrice = flowerList => {
  var dx = [-1, 1, 0, 0];
  var dy = [0, 0, -1, 1];
  var fPrice = 0;
  var check = new Set();
  flowerList.some(e => {
    var x = Math.floor(e / n);
    var y = e % n;
    fPrice += board[x][y];
    check.add(`${x},${y}`);
    for (let d in dx) {
      var newX = x + dx[d];
      var newY = y + dy[d];
      if (newX < 0 || newX >= n || newY < 0 || newY >= n) continue;
      check.add(`${newX},${newY}`);
      fPrice += board[newX][newY];
    }
  });
  return check.size != 15 ? 3001 : fPrice;
};
var price = 3001;
for (let i = 0; i < n ** 2; i++) for (let j = i + 2; j < n ** 2; j++) for (let k = j + 2; k < n ** 2; k++) price = Math.min(price, getPrice([i, j, k]));
console.log(price);
