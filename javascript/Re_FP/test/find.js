const { L, go, take, curry } = require('../lib/fx');

const users = [
  { age: 32 },
  { age: 22 },
  { age: 12 },
  { age: 35 },
  { age: 72 },
  { age: 33 },
];

const find = curry((func, iter) =>
  go(iter, L.filter(func), take(1), ([item]) => item),
);

console.log(find(user => user.age < 30)(users));
