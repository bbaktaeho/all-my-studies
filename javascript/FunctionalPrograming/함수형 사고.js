const products = [
  { name: "반팔1", price: 15000 },
  { name: "반팔2", price: 20000 },
  { name: "반팔3", price: 3000 },
  { name: "반팔4", price: 40000 },
];

const map = (func, iter) => {
  let res = [];
  for (item of iter) res.push(func(item));
  return res;
};

const filter = (func, iter) => {
  let res = [];
  for (item of iter) {
    if (func(item)) res.push(item);
  }
  return res;
};

const reduce = (func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (item of iter) acc = func(acc, item);
  return acc;
};

// 가격 뽑기
console.log(map((p) => p.price, products));

// 특정 이하의 상품 뽑기
console.log(map((p) => p, filter((p) => p.price < 20000, products)));

// 특정 이하의 상품을 뽑아 가격 더하기
console.log(reduce(
  (a, b) => a + b,
  map((p) => p.price, filter((p) => p.price < 20000, products)),
));
