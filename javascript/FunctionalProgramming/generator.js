/**
 * @제너레이터 이터레이터이자 이터러블을 생성하는 함수
 * @description 문장을 값으로 만들 수 있고 문장을 통해서 순회할 수 있는 값을 만들어줌
 * 어떠한 상태나 어떠한 값을 순회할 수 있게 만들어줌
 */

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 100; // 이터레이터의 done 할 때 나오는 값
}
let itr = gen();
// 이터레이터는 심볼 이터레이터를 가지고 있고 그것은 자기 자신임
console.log(itr[Symbol.iterator]() == itr);
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

for (let a of gen()) console.log(a);

// 무한대 제너레이터
function* infinity(i = 0) {
  while (true) yield i++;
}

// 리밋 제너레이터
function* limit(value, iter) {
  for (let a of iter) {
    yield a;
    if (a == value) return;
  }
}

// 홀수만 발생시키는 제너레이터
function* odds(value) {
  for (let inf of limit(value, infinity(1))) {
    if (inf % 2) yield inf;
    if (inf == value) return;
  }
}
let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

for (let i of odds(40)) console.log(i);

console.clear();
// for of, 전개 연산자, 구조 분해, 나머지 연산자
console.log(...odds(10));
console.log([...odds(10), ...odds(20)]);

// 구조 분해
const [head, ...tail] = odds(5);
console.log(head);
console.log(tail);

const list = [1, 2, 3, 4, 5];
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const [item] = list;
const { a: oItem } = obj;
console.log(item);
console.log(oItem);
