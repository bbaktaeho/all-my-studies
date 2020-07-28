const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const list = [];
rl.on('line', (input) => {
  list.push(input);
}).on('close', () => {
  list.shift();
  sorted(list);
});

function sorted(list) {
  var result = [];
  for (let item of list) {
    var user = item.split(' ');
    result.push({ age: user[0], name: user[1] });
  }
  result.sort((a, b) => a.age - b.age).forEach((e) => console.log(`${e.age} ${e.name}`));
}
