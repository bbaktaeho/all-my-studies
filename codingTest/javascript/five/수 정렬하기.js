const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const list = [];
rl.on('line', (input) => {
  list.push(input);
}).on('close', () => {
  list.shift();
  sorted(list.map((e) => Number(e)));
});

function sorted(list) {
  for (let i = 0; i < list.length; i++) {
    var minIndex = i;
    for (let j = i + 1; j < list.length; j++) if (list[j] < list[minIndex]) minIndex = j;
    [list[i], list[minIndex]] = [list[minIndex], list[i]];
  }

  list.forEach((e) => console.log(e));
}
