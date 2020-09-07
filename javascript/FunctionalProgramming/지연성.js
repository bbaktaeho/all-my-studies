/**
 * 지연성을 가진 함수들
 * 제너레이터/이터레이터 프로토콜 기반으로 구현
 * 평가를 미루는 성질을 가지고, 평가 순서를 달리 조작할 수 있는 준비가 되어있는 이터레이터를 반환하는 제너레이터 함수
 */

const L = {};
L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};
// var list = L.range(4);
// console.log(reduce(add, list));

L.map = function* (func, iter) {
  for (const a of iter) yield func(a);
};
var it = L.map((a) => a + 10, [1, 2, 3]);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

L.filter = function* (func, iter) {
  for (const a of iter) if (func(a)) yield a;
};
var it = L.filter((a) => a % 2, [1, 2, 3, 4]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
