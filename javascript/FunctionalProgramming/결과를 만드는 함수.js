const { curryMap, curryReduce, curry } = require('./curryFunction');
const { go, pipe } = require('./go,pipe');
const L = require('./lazyEvaluation');

console.clear();
/**
 * 연산을 시작하는, 시작점을 알리는 함수
 * reduce, take
 * take는 몇 개로 떨어질지 모르는 배열에서 축약시키는 함수
 */

const join = curry((sep = ',', iter) => curryReduce((a, b) => `${a}${sep}${b}`, iter));

// 쿼리스트링 만들기
/*const queryStr = (obj) =>
  go(
    obj,
    Object.entries,
    curryMap(([key, value]) => `${key}=${value}`),
    curryReduce((a, b) => `${a}&${b}`)
  );*/
const queryStr = pipe(
  Object.entries, // 즉시 평가.. 불편하다!
  curryMap(([key, value]) => `${key}=${value}`),
  join('&')
);

// 지연성으로 구현하기!
const lazyQueryStr = pipe(
  L.entries,
  curryMap(([key, value]) => `${key}=${value}`),
  join('&')
);

console.log(queryStr({ limit: 10, offset: 10, type: 'notice' }));
console.log(lazyQueryStr({ limit: 10, offset: 10, type: 'notice' }));
