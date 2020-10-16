const { reduce } = require('./lib/fx');

const add = (a, b) => a + b;
const range = len => {
  let res = [];
  let i = -1;
  while (++i < len) res.push(i);
  return res;
};

var list = range(6);
console.log(list);
console.log(reduce(add, list));

const L = {};
L.range = function* (l) {
  let i = -1;
  while (++i < l) yield i;
};

var list = L.range(6);
console.log(list);
console.log(reduce(add, list));
