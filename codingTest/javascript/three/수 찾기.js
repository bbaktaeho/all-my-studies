const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });
var list = [];
rl.on("line", (input) => {
  list.push(input);
}).on("close", () => {
  findNumber(list);
});

function findNumber(list) {
  var N = Number(list[0]);
  var arr = list[1].split(" ").map((e) => Number(e));
  var M = Number(list[2]);
  var searchList = list[3].split(" ").map((e) => Number(e));
  arr.sort((a, b) => a - b);
  for (let num of searchList) console.log(binarySearch(num, arr));
}

function binarySearch(num, arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === num) return 1;
    else if (arr[mid] > num) high = mid - 1;
    else low = mid + 1;
  }
  return 0;
}
