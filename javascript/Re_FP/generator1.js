/**
 * 제너레이터는 이터레이터이자 이터러블을 생성하는 함수
 * 자바스크립트는 문장(어떠한 값들)을 통해 순회할 수 있는 값(이터러블)을 만들 수 있다는 것이 놀라움..
 */

function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return 100; // 리턴 값은 done이 true가 될 때 나오는 값 (순회는 하지 않음)
}
var iter = gen();
console.log(iter[Symbol.iterator]() == iter);
console.log(iter.next());

for (const item of gen()) console.log(item);
