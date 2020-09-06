const products = [
  { name: "반팔1", price: 15000 },
  { name: "반팔2", price: 20000 },
  { name: "반팔3", price: 3000 },
  { name: "반팔4", price: 40000 },
];

const arr = [1, 2, 3, 4, 5];
let total = 0;
for (const n of arr) {
  total += n;
}

module.exports = (func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const n of iter) {
    acc = func(acc, n);
  }
  return acc;
};

const add = (a, b) => a + b;
console.log(reduce(add, 0, [1, 2, 3, 4, 5]));
console.log(reduce(add, [1, 2, 3, 4, 5]));
console.log(reduce(add, 1, [2, 3, 4, 5]));

console.log(reduce((total, product) => total + product.price, 0, products));
