const { reduce } = require('./mapFilterReduce');
const products = require('./products');

// curry 함수 만들기
// 함수를 값으로 다루면서 받아둔 함수를 내가 원하는 시점에 평가시키는 함수
// 함수(f)를 받아서 함수를 리턴(resultF)하고,
// 인자를 받아서 원하는 개수 만큼의 인자가 들어왔을 때 받아두었던 함수(f)를 나중에 평가시키는 함수
// (f)에서 사용할 인자를 대신해서 (resultF)가 받음 첫번째인자 a, 나머지인자 ..._
// (f)에서 사용할 인자가 두 개 이상이라면 새로운 함수를 리턴, 그렇지 않으면 f 함수 바로 실행
const curry = (f) => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

const curryMap = curry((func, iter) => {
  let res = [];
  for (item of iter) res.push(func(item));
  return res;
});

const curryFilter = curry((func, iter) => {
  let res = [];
  for (item of iter) {
    if (func(item)) res.push(item);
  }
  return res;
});

const curryReduce = curry((func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (item of iter) acc = func(acc, item);
  return acc;
});

// 인자의 첫 번째 인자를 다음 함수에 전달하고 또 다음 함수로 전달하고... 연속적으로 일해서 하나의 값으로 나타냄
// 즉시 평가하는 함수
const go = (...args) => reduce((acc, f) => f(acc), args);
go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);

// 함수를 리턴하는 함수
// 함수들이 나열되어 있는 것을 합성해서 축약 함수를 만드는 함수
// 내부에서 go 사용
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
const f = pipe(
  (a) => a + 1, // (a,b) => a+b
  (a) => a + 10,
  (a) => a + 100
); // 합쳐진 축약 함수가 리턴

module.exports = { curry, curryMap, curryFilter, curryReduce };
