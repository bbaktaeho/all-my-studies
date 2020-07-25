var inputLines = require("fs").readFileSync("/dev/stdin").toString().split("\n");

async function main() {
  var [N, M] = inputLines[0].split(" ").map((e) => Number(e));
  var arr = inputLines[1].split(" ").map((e) => Number(e));
  if (arr.length !== N) return;
  var sum;
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      for (var k = j + 1; k < arr.length; k++) {
        sum = arr[i] + arr[j] + arr[k];
        if (sum === M) return console.log(sum);
        if (result < sum && sum <= M) result = sum;
      }
    }
  }
  console.log(result);
}

main();
