const { go } = require('../go,pipe');
const { filter, reduce, map } = require('../map,filter,reduce');
const products = require('../products');
console.clear();

// 2만원 미만의 가격들을 더하는 예제
const result = reduce(
  (a, b) => a + b,
  map(
    (p) => p.price,
    filter((p) => p.price < 20000, products)
  )
);
console.log(result);

go(
  products,
  (products) => filter((p) => p.price < 20000, products),
  (products) => map((p) => p.price, products),
  (prices) => reduce((a, b) => a + b, prices),
  console.log
);
