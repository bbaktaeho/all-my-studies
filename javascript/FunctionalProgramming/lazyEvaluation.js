const { curry } = require('./curryFunction');
console.clear();
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
  for (let item of iter) yield func(item);
});
const it = L.map((a) => a + 10, [1, 2, 3]); // 여기서 아무것도 진행되지 않음. 즉, 평가를 하지 않는다는 것
// console.log([...it]); // next() 또는 ...연산자로 평가

// L.filter
L.filter = curry(function* (func, iter) {
  for (let item of iter) if (func(item)) yield item;
});
const it2 = L.filter((a) => a % 2, [1, 2, 3, 4]);
// console.log(it2);
// console.log(it2.next());
// console.log([...it2]); // next를 전에 한 번 사용해서 평가된 녀석은 빼고 펼쳐짐

module.exports = L;
