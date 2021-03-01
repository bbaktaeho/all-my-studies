const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const check = arr => {
  for (const i in arr) if (arr[i] % 2 == 1) arr[i] += 1;
  return new Set(arr).size == 1;
};

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  let T = +input.shift();
  while (T--) {
    const N = +input.shift();
    const arr = input
      .shift()
      .split(" ")
      .map(e => +e);
    const half = new Array(N);
    let cnt = 0;
    while (!check(arr)) {
      for (const i in arr) half[i] = arr[i] /= 2;
      arr[0] += half[N - 1];
      for (let i = 0; i < N - 1; i++) arr[i + 1] += half[i];
      cnt++;
    }
    console.log(cnt);
  }
});
