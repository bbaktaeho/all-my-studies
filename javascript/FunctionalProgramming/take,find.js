const { curryFilter, curry } = require('./curryFunction');
const { go } = require('./go,pipe');
const L = require('./lazyEvaluation');
const { take } = require('./range,take');

console.clear();

const users = [
  { age: 22 },
  { age: 23 },
  { age: 10 },
  { age: 65 },
  { age: 3 },
  { age: 34 },
  { age: 75 },
  { age: 33 },
  { age: 23 },
  { age: 76 },
  { age: 37 },
  { age: 87 },
];

// const find = (func, iter) => go(iter, curryFilter(func), take(1), ([a]) => a);
const find = curry((func, iter) => go(iter, L.filter(func), take(1), ([a]) => a));
console.log(find((user) => user.age < 30, users));

go(
  users,
  L.map((user) => user.age),
  find((n) => n < 30),
  console.log
);
