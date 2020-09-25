const { curry, curryMap } = require('./curryFunction');
const { pipe, go, go1 } = require('./go,pipe');
console.clear();
/**
 * 지연성을 가진 함수들
 * 제너레이터/이터레이터 프로토콜 기반으로 구현
 * 평가를 미루는 성질을 가지고, 평가 순서를 달리 조작할 수 있는 준비가 되어있는 이터레이터를 반환하는 제너레이터 함수
 */
/**
 * ? 이터러블 중심 프로그래밍에서의 지연 평가(게으른 평가라고도 하지만 실제로는 영리함..!)
 * ? 이터러블, 컬렉션, 리스트 등등..!
 * * 제때 계산법 : 필요할 때 까지 평가를 미루다가 필요할 때 값들을 만들어감
 * * 느긋한 계산법
 * * 제너레이터/이터레이터 프로토콜 기반으로 구현
 */
const L = {};
L.range = function* (len) {
  let i = -1;
  while (++i < len) {
    yield i;
  }
};

// L.map
L.map = curry(function* (func, iter) {
  for (let item of iter) yield go1(item, func);
});
// const it = L.map((a) => a + 10, [1, 2, 3]); // 여기서 아무것도 진행되지 않음. 즉, 평가를 하지 않는다는 것
// console.log([...it]); // next() 또는 ...연산자로 평가

// L.filter
L.filter = curry(function* (func, iter) {
  for (let item of iter) if (func(item)) yield item;
});
// const it2 = L.filter((a) => a % 2, [1, 2, 3, 4]);
// console.log(it2);
// console.log(it2.next());
// console.log([...it2]); // next를 전에 한 번 사용해서 평가된 녀석은 빼고 펼쳐짐

L.entries = function* (obj) {
  for (let key in obj) yield [key, obj[key]];
};

// L.flatten
// 모든 리스트를 펼쳐줌
// ? [[1, 2], 3, 4, [5, 6], [7, 8, 9]]
const isIterable = (a) => a && a[Symbol.iterator];
/* L.flatten = function* (iter) {
  for (let item of iter) {
    if (isIterable(item)) {
      for (let i of item) yield i;
    } else yield item;
  }
}; */
// * yield* iterable ===  for (const val of iterable) yield val
L.flatten = function* (iter) {
  for (let item of iter) {
    if (isIterable(item)) yield* item;
    else yield item;
  }
};

// const test = L.flatten([[1, 2], 3, 4, [5, 6], [7, 8, 9]]);
// console.log([...test]);

// L.deepFlat
// 깊은 iterable 펼치기
L.deepFlat = function* f(iter) {
  for (let item of iter) {
    if (isIterable(item)) yield* f(item);
    else yield item;
  }
};
// console.log(...L.deepFlat([1, [2, [3, 4], [[5]]]])); // 오진다

// 플랫맵은 최신 문법에 생겼음!
// L.flatMap
L.flatMap = curry(pipe(L.map, L.flatten));

// const test = L.flatMap(
//   curryMap((a) => a * a),
//   [
//     [1, 2],
//     [3, 4],
//     [5, 6, 7],
//   ]
// );
// console.log([...test]);

// 기존 문법의 Array.prototype.flatMap
// console.log([[1, 2], [3, 4], [5, 6, 7], 8, 9, [10]].flatMap((a) => a));
module.exports = L;
