// const products = [
//   { name: '반팔1', price: 15000 },
//   { name: '반팔2', price: 20000 },
//   { name: '반팔3', price: 3000 },
//   { name: '반팔4', price: 40000 },
// ];

// // curry 함수 만들기
// // 함수를 값으로 다루면서 받아둔 함수를 내가 원하는 시점에 평가시키는 함수
// // 함수를 받아서 함수를 리턴하고, 인자를 받아서 인자가 원하는 개수 만큼의 인자가 들어왔을 때 받아두었던 함수를 나중에 평가시키는 함수
// // f에서 사용할 인자를 대신해서 받음 첫번째인자 a, 나머지인자 ..._
// // f에서 사용할 인자가 두 개 이상이라면 새로운 함수를 리턴, 그렇지 않으면 f 함수 바로 실행
// const curry = (f) => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

// const map = curry((func, iter) => {
//   let res = [];
//   for (item of iter) res.push(func(item));
//   return res;
// });
// console.log(map.toString());

// const filter = curry((func, iter) => {
//   let res = [];
//   for (item of iter) {
//     if (func(item)) res.push(item);
//   }
//   return res;
// });

// const reduce = curry((func, acc, iter) => {
//   if (!iter) {
//     iter = acc[Symbol.iterator]();
//     acc = iter.next().value;
//   }
//   for (item of iter) acc = func(acc, item);
//   return acc;
// });

// // 가격 뽑기
// console.log(map((p) => p.price, products));

// // 특정 이하의 상품 뽑기
// console.log(
//   map(
//     (p) => p,
//     filter((p) => p.price < 20000, products)
//   )
// );

// // 특정 이하의 상품을 뽑아 가격 더하기
// console.log(
//   reduce(
//     (a, b) => a + b,
//     map(
//       (p) => p.price,
//       filter((p) => p.price < 20000, products)
//     )
//   )
// );

// /**
//  * 함수형 프로그래밍에서는 코드를 값으로 다루는 것을 많이 사용함
//  * 코드를 값으로 다루어 표현력 높이기
//  */

// // 즉시 값을 평가하는데 사용함
// // pipe는 함수들이 나열되어 있는 합성된 함수를 만드는 함수
// const go = (...args) => reduce((a, f) => f(a), args);
// const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

// go(
//   0,
//   (a) => a + 1,
//   (a) => a + 10,
//   (a) => a + 100,
//   console.log
// );

// const pipeF = pipe(
//   (a, b) => a + b,
//   (a) => a + 10,
//   (a) => a + 100
// );
// console.log(pipeF(0, 1));
// // go(0, f, f, f) -> 111

// go(
//   products,
//   filter((p) => p.price < 20000),
//   map((p) => p.price),
//   reduce((a, b) => a + b),
//   console.log
// );

// const mult = curry((a, b) => a * b);
// console.log(mult(1)(2).toString());

// const mult3 = mult(3);
// console.log(mult3(10));
// console.log(mult3(11));
// console.log(mult3(12));

// /*
// // ! 정리
// // * curry 함수가 아닐 때 코드
// console.log(
//   reduce(
//     (a, b) => a + b,
//     map((p) => p.price, filter((p) => p.price < 20000), products),
//   ),
// );
// // * curry 함수가 아니고 go 함수 사용할 때
// go(
//   products,
//   (products) => filter((p) => p.price < 20000, products),
//   (products) => map((p) => p.price, products),
//   prices = reduce((a, b) => a + b, prices),
//   console.log,
// );
// // * curry 함수로 사용할 때
// go(
//   products,
//   (products) => filter((p) => p.price < 20000)(products),
//   (products) => map((p) => p.price)(products),
//   prices = reduce((a, b) => a + b)(prices),
//   console.log,
// );
// // 생략
// go(
//   products,
//   filter((p) => p.price < 20000),
//   map((p) => p.price),
//   reduce((a, b) => a + b),
//   console.log,
// );
// */

// // 함수 조합으로 함수 만들기
// const total_price = pipe(
//   map((p) => p.price),
//   reduce((a, b) => a + b)
// );
// const base_total_price = (predi) => pipe(filter(predi), total_price);
// go(
//   products,
//   base_total_price((p) => p.price < 20000),
//   console.log
// );

// module.exports = {
//   curry,
//   go,
//   pipe,
//   filter,
//   map,
//   reduce,
// };
