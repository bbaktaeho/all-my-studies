// 제때 계산법, 느긋한 계산법
// 값을 만드는 것을 최소화!!
// 제너레이터/이터레이터 프로토콜을 기반으로 구현할 수 있다.
const { curry } = require('./fx');

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
