const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

var list = [];
var friendList;
var network;

rl.on('line', (input) => {
  list.push(input);
}).on('close', () => {
  friendNet(list);
});

function friendNet(list) {
  var index = 0;
  var testCase = list.shift();
  for (; testCase > 0; testCase--) {
    friendList = new Map();
    network = new Map();
    const relation = list.slice(index + 1, Number(list[index]) + 1 + index);
    for (let str of relation) {
      const [x, y] = str.split(' ');
      if (!friendList.has(x)) {
        friendList.set(x, x);
        network.set(x, 1);
      }
      if (!friendList.has(y)) {
        friendList.set(y, y);
        network.set(y, 1);
      }
      index++;
      union(x, y);
      console.log(network.get(find(x)));
    }
    index++;
  }
}

function union(x, y) {
  let xx = find(x);
  let yy = find(y);

  if (xx != yy) {
    friendList.set(yy, xx);
    network.set(xx, network.get(xx) + network.get(yy));
  }
}

function find(x) {
  if (x == friendList.get(x)) return x;
  else {
    let f = find(friendList.get(x));
    friendList.set(x, f);
    return friendList.get(x);
  }
}
