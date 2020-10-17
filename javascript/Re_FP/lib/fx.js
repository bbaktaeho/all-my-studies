const isIterable = item => item && item[Symbol.iterator];

/**
 * @description 함수를 받아서 함수를 리턴
 * @description 인자(함수)를 받아서 인자가 원하는 개수만큼의 인자가 들어왔을 때 받아두었던 함수를 나중에 평가시키는 함수
 * @param {*} f 나중에 평가시킬 함수
 */
const curry = f => (arg, ..._) =>
  _.length ? f(arg, ..._) : (..._) => f(arg, ..._);
// !---------------------------------------------------------

/**
 * 결과를 만드는 함수
 */
const reduce = curry((func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) acc = func(acc, a);
  return acc;
});
// !---------------------------------------------------------

/**
 * @description 가독성을 위해 reduce를 사용해서 즉시 판단하는 함수
 * @param  {...any} args 가변 인자로 첫 인자 값은 함수가 오면 안 됨
 */
const go = (...args) => reduce((acc, f) => f(acc), args);
// !---------------------------------------------------------

/**
 * @description go를 사용해서 종합된 함수를 리턴하는 함수
 * @param {function} f go의 첫 번째 인자 값으로 들어가야할 실행 함수
 * @param  {...functions} fs 종합할 함수
 */
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
// !---------------------------------------------------------

const range = len => {
  let res = [];
  let i = -1;
  while (++i < len) res.push(i);
  return res;
};
// !---------------------------------------------------------

/**
 * 결과를 만드는 함수
 */
const take = curry((limit, iter) => {
  let res = [];
  for (const item of iter) {
    res.push(item);
    if (res.length == limit) return res;
  }
  return res;
});
// !---------------------------------------------------------

const L = {};
L.range = function* (limit) {
  let i = -1;
  while (++i < limit) yield i;
};

L.map = curry(function* (func, iter) {
  for (const item of iter) yield func(item);
});

L.filter = curry(function* (func, iter) {
  for (const item of iter) if (func(item)) yield item;
});

L.entries = function* (obj) {
  for (const i in obj) yield [i, obj[i]];
};

L.flatten = function* (iter) {
  for (const item of iter) {
    // yield* -> for (item of iter) yield;
    if (isIterable(item)) yield* item;
    else yield item;
  }
};

L.deepFlat = function* f(iter) {
  for (const item of iter) {
    if (isIterable(item)) yield* f(item);
    else yield item;
  }
};

L.flatMap = curry(pipe(L.map, L.flatten));
// !---------------------------------------------------------

const customMap = curry((func, iter) => {
  let res = [];
  for (const a of iter) res.push(func(a));
  return res;
});
// L.map으로 map 만들기
const map2 = curry((func, iter) => go(iter, L.map(func), take(Infinity)));
// 위의 코드를 pipe로 변경해보기
const map = curry(pipe(L.map, take(Infinity)));
// !---------------------------------------------------------

const customFilter = curry((func, iter) => {
  let res = [];
  for (const a of iter) if (func(a)) res.push(a);
  return res;
});
// L.filter로 filter 만들기
const filter = curry(pipe(L.filter, take(Infinity)));
// !---------------------------------------------------------

const join = curry((sep = ',', iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter),
);
// !---------------------------------------------------------

const flatten = pipe(L.flatten, take(Infinity));
// !---------------------------------------------------------

const flatMap = curry(pipe(L.map, flatten));
// !---------------------------------------------------------

module.exports = {
  L,
  curry,
  map,
  filter,
  reduce,
  go,
  pipe,
  take,
  range,
  join,
  flatten,
  flatMap,
};

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
