/**
 * 특정 동작을 수행하는 제너레이터 구현
 */
// 이터러블 제한
function* gLimit(limit, iter) {
  for (const item of iter) {
    yield item;
    if (item == limit) return;
  }
}
// 무한 수열 발생기
function* infinity(i = 0) {
  while (true) yield i++;
}
// 홀수 발생기
function* odds(limit) {
  for (const item of gLimit(limit, infinity(1))) if (item % 2) yield item;
}

var iter = odds(10);
for (const item of iter) console.log(item);

// 다양한 사용법
console.clear();
console.log(...odds(10));
console.log([...odds(10)]);
var [head, ...tail] = odds(5);
console.log('head:', head);
console.log('tail:', tail);

function* infinity() {
  let i = 0;
  while (true) yield ++i;
}
const iter = infinity();
console.log(iter.next().value); // 1
console.log(iter.next().value); // 2
console.log(iter.next().value); // 3
