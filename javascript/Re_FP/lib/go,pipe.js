const { map, filter, reduce, go, pipe } = require('./fx.js');
const products = require('./products.js');

// 첫 번째 인자를 다음 인자함수에 인자로 전달.
// 결국은 하나의 값으로 나옴 (즉시 판단)
// go(
//   0,
//   a => a + 1,
//   a => a + 10,
//   a => a + 100,
//   console.log,
// );
// go(
//   products,
//   products => filter(p => p.price < 20000, products),
//   products => map(p => p.price, products),
//   prices => reduce((a, b) => a + b, prices),
//   console.log,
// );
go(
  products,
  filter(p => p.price < 20000),
  map(p => p.price),
  reduce((a, b) => a + b),
  console.log,
);
