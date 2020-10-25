/**
 * 제너레이터는 이터레이터이자 이터러블을 생성하는 함수
 * 자바스크립트는 문장(어떠한 값들)을 통해 순회할 수 있는 값(이터러블)을 만들 수 있다는 것이 놀라움..
 */

function* gen() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    yield ++i;
  }
}
// console.log(iter[Symbol.iterator]() == iter);
// console.log(iter.next());
var iter = gen();

for (const item of iter) {
  // if (item == 1) break;
}
