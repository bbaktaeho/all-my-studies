const rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

const input = [];
rl.on("line", line => {
  input.push(line);
}).on("close", () => {
  const capacity = [0, 0, 0];
  const milk = [0, 0, 0];
  for (const i in capacity) {
    const [a, b] = input
      .shift()
      .split(" ")
      .map(e => +e);
    capacity[i] = a;
    milk[i] = b;
  }

  for (let i = 0; i < 100; i++) {
    const cur = i % 3;
    const next = (cur + 1) % 3;
    const mNext = milk[next];
    milk[next] = Math.min(capacity[next], milk[cur] + milk[next]);
    milk[cur] = Math.max(0, milk[cur] - (capacity[next] - mNext));
  }
  milk.some(e => console.log(e));
});
