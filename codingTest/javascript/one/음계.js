const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readLine() {
  return new Promise((reslove, reject) => {
    rl.on("line", (input) => {
      reslove(input);
      rl.close();
    });
  });
}

async function main() {
  var input = await readLine();
  var list = input.split(" ");
  //   list.forEach((e, i) => {
  //     list[i] = Number(e);
  //   });
  if (list.length != 8) return;
  var result;
  if (list[0] == 1) {
    result = "ascending";
    for (var i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        result = "mixed";
        break;
      }
    }
  } else if (list[0] == 8) {
    result = "descending";
    for (var i = 0; i < list.length - 1; i++) {
      if (list[i] < list[i + 1]) {
        result = "mixed";
        break;
      }
    }
  } else result = "mixed";
  console.log(result);
}

main();
