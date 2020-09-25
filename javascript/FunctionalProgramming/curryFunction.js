const { reduce } = require('./map,filter,reduce');
const products = require('./products');

// curry 함수 만들기
// 함수를 값으로 다루면서 받아둔 함수를 내가 원하는 시점에 평가시키는 함수
// 함수(f)를 받아서 함수를 리턴(resultF)하고,
// 인자를 받아서 원하는 개수 만큼의 인자가 들어왔을 때 받아두었던 함수(f)를 나중에 평가시키는 함수
// (f)에서 사용할 인자를 대신해서 (resultF)가 받음 첫번째인자 a, 나머지인자 ..._
// (f)에서 사용할 인자가 두 개 이상이라면 새로운 함수를 리턴, 그렇지 않으면 f 함수 바로 실행
/**
 * todo 1: 인자로 함수(f)를 받음
 * todo 2: 함수를 바로 리턴
 *         return (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._))
 * todo 3.1: 리턴된 함수를 받아서 사용할 경우 인자가 한 개
 *           return (..._) => f(a, ..._)
 * todo 3.2: 리턴된 함수를 받아서 사용할 경우 인자가 두 개 이상
 *           return f(a, ..._)
 */
const curry = (f) => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

// 이터러블인지 확인하기
const isIterable = (iter) => iter && iter[Symbol.iterator];

//
const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

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
  } else {
    iter = iter[Symbol.iterator]();
  }
  return go1(acc, function recur(acc) {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      acc = func(acc, a);
      if (acc instanceof Promise) return acc.then(recur);
    }
    return acc;
  });
});

module.exports = { curry, curryMap, curryFilter, curryReduce, isIterable };
