const { reduce, curry, go } = require('./lib/fx');

const add = (a, b) => a + b;

// 범위 안의 숫자 리스트를 반환하는 함수
const range = len => {
  let res = [];
  let i = -1;
  while (++i < len) res.push(i);
  return res;
};

var list = range(6);
// console.log(list);
// console.log(reduce(add)(list));

// 느긋한 range
// 즉시 평가가 아니라 지연 평가로 동작함
// 제너레이터로 만들어진 이터레이터는 next 함수를 실행 시켰을 때만 평가한다.
// 즉, 실제 값이 필요할 때, 값을 만들어 내야할 때만 꺼내 쓴다는 말임
const L = {};
L.range = function* (l) {
  let i = -1;
  while (++i < l) yield i;
};

function test(name, time, f) {
  console.time(name);
  while (time--) f();
  console.timeEnd(name);
}

// test('range', 10, () => reduce(add, range(10000000)));
// test('L.range', 10, () => reduce(add, L.range(10000000)));

var list = L.range(6);

const take = curry((limit, iter) => {
  let res = [];
  for (const item of iter) {
    res.push(item);
    if (res.length == limit) return res;
  }
  return res;
});
console.clear();
console.time('');
go(range(1000000), take(5), reduce(add), console.log);
console.timeEnd('');
console.time('');
go(L.range(1000000), take(5), reduce(add), console.log);
console.timeEnd('');
