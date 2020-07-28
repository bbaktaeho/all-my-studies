const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

rl.on('line', (input) => {
  sorted(input);
  rl.close();
});

function sorted(input) {
  var list = input.split('');
  for (let i = 0; i < list.length; i++) {
    var minIdx = i;
    for (let j = i + 1; j < list.length; j++) if (list[j] < list[minIdx]) minIdx = j;
    [list[i], list[minIdx]] = [list[minIdx], list[i]];
  }
  list.reverse();
  console.log(list.join(''));
}
