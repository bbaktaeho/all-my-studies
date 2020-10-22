const { map, filter, reduce, go, pipe, curry } = require('../lib/fx.js');
const products = require('../lib/products.js');

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

// go(
//   products,
//   filter(p => p.price < 20000),
//   totalPrice,
//   console.log,
// );

// const totalQuantity = products =>
//   go(
//     products,
//     map(p => p.quantity),
//     reduce((a, b) => a + b),
//   );
const add = (a, b) => a + b;
// const totalQuantity = pipe(
//   map(p => p.quantity),
//   reduce(add),
// );
// const totalPrice = pipe(
//   map(p => p.quantity * p.price),
//   reduce(add),
// );
// console.log(totalQuantity(products));
// console.log(totalPrice(products));

const getTotal = curry((f, iter) => go(iter, map(f), reduce(add)));
const totalQuantity = products => getTotal(p => p.quantity)(products);
const totalQuantity2 = getTotal(p => p.quantity);
const totalPrice = getTotal(p => p.quantity, products);
console.log(totalQuantity(products));
console.log(totalQuantity2(products));
console.log(totalPrice);
