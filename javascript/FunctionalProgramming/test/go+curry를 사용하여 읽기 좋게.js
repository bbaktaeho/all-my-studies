const { curryFilter, curryMap, curryReduce } = require('../curryFunction');
const { go } = require('../go,pipe');
const products = require('../products');
console.clear();

// const reduce = (func, acc, iter) => {
//   if (!iter) {
//     iter = acc[Symbol.iterator]();
//     acc = iter.next().value;
//   }
//   for (let item of iter) {
//     acc = func(acc, item);
//   }
//   return acc;
// };

// const go = (...args) => reduceQ((acc, f) => f(acc), args);

go(
  products,
  (products) => curryFilter((p) => p.price < 20000)(products), // (..._) => f(a, ..._)  --->  f((p) => p.price < 20000, product)
  (products) => curryMap((p) => p.price)(products),
  (prices) => curryReduce((a, b) => a + b)(prices),
  console.log
);

go(
  products,
  curryFilter((p) => p.price < 20000),
  curryMap((p) => p.price),
  curryReduce((a, b) => a + b),
  console.log
);
