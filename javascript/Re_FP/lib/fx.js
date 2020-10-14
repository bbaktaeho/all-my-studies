/**
 * @description 함수를 받아서 함수를 리턴
 * @description 인자(함수)를 받아서 인자가 원하는 개수만큼의 인자가 들어왔을 때 받아두었던 함수를 나중에 평가시키는 함수
 * @param {*} f 나중에 평가시킬 함수
 */
const curry = f => (arg, ..._) =>
  _.length ? f(arg, ..._) : (..._) => f(arg, ..._);

const map = curry((func, iter) => {
  let res = [];
  for (const a of iter) res.push(func(a));
  return res;
});

const filter = curry((func, iter) => {
  let res = [];
  for (const a of iter) if (func(a)) res.push(a);
  return res;
});

const reduce = curry((func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) acc = func(acc, a);
  return acc;
});

/**
 * @description 가독성을 위해 reduce를 사용해서 즉시 판단하는 함수
 * @param  {...any} args 가변 인자로 첫 인자 값은 함수가 오면 안 됨
 */
const go = (...args) => reduce((acc, f) => f(acc), args);

/**
 * @description go를 사용해서 종합된 함수를 리턴하는 함수
 * @param {function} f go의 첫 번째 인자 값으로 들어가야할 실행 함수
 * @param  {...functions} fs 종합할 함수
 */
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

module.exports = { map, filter, reduce, go, pipe };

// var names = map(p => p.name, products);
// var prices = map(p => p.price, products);
// console.log(names);
// console.log(prices);

// var under20000 = filter(p => p.price < 20000, products);
// var over20000 = filter(p => p.price >= 20000, products);
// console.log(under20000);
// console.log(over20000);

// var totalPrice = reduce((acc, current) => acc + current.price, 0, products);
// console.log(totalPrice);

// console.clear();
// console.log(
//   reduce(
//     (a, b) => a + b,
//     map(
//       p => p.price,
//       filter(p => p.price < 20000, products),
//     ),
//   ),
// );
