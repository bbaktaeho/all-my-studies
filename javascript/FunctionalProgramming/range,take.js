const { curryReduce, curry } = require('./curryFunction');
const { go } = require('./go,pipe');
console.clear();

/**
 * range 함수는 숫자 하나를 받고 그 숫자의 크기만한 배열을 리턴하는 함수
 */
const add = (a, b) => a + b;

const range = (len) => {
  let i = -1;
  let res = [];
  while (++i < len) {
    res.push(i);
  }
  return res;
};
const list1 = range(5); // 이미 모두 평가되서 값이 만들어짐
console.log(list1.toString());
console.log(curryReduce(add, list1)); // 일반 range로 만들어진 배열을 reduce로 돌리면 내부에서 배열을 이터레이터로 바꾸는 동작까지 하게됨.

/**
 * 느긋한 range
 * 앞으로 값을 발생시킬 이터레이터가 내부를 순회할 때마다 하나씩 평가됨. 즉, 그 때부터 제너레이터 내부가 돌아간다.
 */
const L = {};
L.range = function* (len) {
  let i = -1;
  while (++i < len) {
    yield i;
  }
};
const list2 = L.range(5); // 아직 어떤 코드들도 평가되지 않음. 즉, 실제 사용자에게 필요한 값을 만들어내기 전까지 동작하지 않음
// 아직 배열 형태가 될 필요가 없다는 말이다!!!

console.log(list2);
console.log(curryReduce(add, list2)); // 이때부터 필요합니닷. 배열을 만드는 것이 아니고 하나씩 꺼내서 사용하는 것

// range와 L.range 비교 테스트
function test(name, time, func) {
  console.time(name);
  while (time--) func();
  console.timeEnd(name);
}

test('range', 10, () => curryReduce(add, range(1000000)));
test('L.range', 10, () => curryReduce(add, L.range(1000000)));

/**
 * take 함수
 * 인자를 두 개 (리밋, 이터러블) 받음
 * 이터러블 프로토콜을 따르고 있음
 */
const take = curry((limit, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const item = cur.value;
      if (item instanceof Promise) return item.then((item) => ((res.push(item), res).length == limit ? res : recur()));
      res.push(item);
      if (res.length == limit) return res;
    }
    return res;
  })();
});

console.time('');
console.log(take(5, range(100000))); // 비효율적 -> 미리 큰 공간을 만들어놓고 5개 빼냄
console.timeEnd('');

console.time('');
console.log(take(5, L.range(100000))); // 효율적 -> 미리 만들지 않고 최대 크기만 지정하는셈
console.timeEnd('');

console.time('');
console.log(take(5, L.range(Infinity))); // 무한대? -> 무한으로 하면 원래 죽지만, 지연성으로 가능!
console.timeEnd('');

// go함수에서 사용
console.time('');
go(range(100000), take(5), console.log);
console.timeEnd('');

console.time('');
go(L.range(100000), take(5), console.log);
console.timeEnd('');

module.exports = { range, take };
