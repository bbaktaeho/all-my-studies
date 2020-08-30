const products = [
  { name: "반팔1", price: 15000 },
  { name: "반팔2", price: 20000 },
  { name: "반팔3", price: 3000 },
  { name: "반팔4", price: 40000 },
];

const filter = (func, iter) => {
  let res = [];
  for (const p of iter) {
    if (func(p)) res.push(p);
  }
  return res;
};

console.log(...filter((p) => p.price < 20000, products));

let it = filter(
  (a) => {
    return a < 5;
  },
  (function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 50;
  })()
);

console.log(it);
console.log(...it);
for (o of it) console.log(o);

let arr = [1, 2, 3, 4, 5, 6, 7]
  .map((e, i, arr) => {
    return e * 2;
  })
  .filter((e, i, arr) => {
    return e < 10;
  });

console.log(arr);
