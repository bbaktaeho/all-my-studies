const { filter, map, reduce, go, curry } = require('./함수형 사고');
console.clear();
const add = (a, b) => a + b;

const range = (l) => {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};
// console.log(range(5));

var list = range(4);
// console.log(reduce(add, list));

// 느긋한 L.range
//
const L = {};
L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

// var list = L.range(4);
// // console.log(list.toString());
// console.log(reduce(add, list));

function test(name, time, func) {
  console.time(name);
  while (time--) func();
  console.timeEnd(name);
}

// test('range', 10, () => reduce(add, range(1000000)));
// test('L.range', 10, () => reduce(add, L.range(1000000)));

console.clear();
// 이터러블을 받아서 자르는 함수
const take = curry((l, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});
console.log(take(5, range(100)));

go(range(10000), take(5), console.log);

/**
 * 이터러블 중심 프로그래밍에서의 지연 평가
 * 제때 계산법
 * 느긋한 계산법
 * 가장 필요할 때 코드들을 평가하면서 값들을 만들어가는 기법입니다.
 * 큰 크기의 배열을 미리 만들어 놓는 것이 아니라 필요할 때만 뽑아 값을 만든다. 이것은 연산을 효율적으로 줄일 수 있다.
 * 
 */