const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

var list = [];
rl.on('line', (input) => {
  list.push(input);
}).on('close', () => {
  result(list);
});

function result(list) {
  var [N, M] = list[0].split(' ').map((e) => parseInt(e));
  var cardList = list[1].split(' ').map((e) => parseInt(e));

  var resultList = [];
  var curr = 0;
  for (var i = 0; i < cardList.length - 2; i++) {
    for (var j = i + 1; j < cardList.length - 1; j++) {
      for (var z = j + 1; z < cardList.length; z++) {
        curr = cardList[i] + cardList[j] + cardList[z];
        if (curr > M) continue;
        else resultList.push(curr);
      }
    }
  }
  console.log(Math.max(...resultList));
}
