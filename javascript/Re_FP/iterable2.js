// 사용자 정의 이터러블
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next: () =>
        i == 0 ? { value: undefined, done: true } : { value: i--, done: false },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
const it = iterable[Symbol.iterator](); // [Symbol.iterator]() 함수를 실행했을 때 자기 자신을 반환하면 웰펌드 이터레이터라고 할 수 있음
console.log(it);
// console.log(it.next());
// console.log(it[Symbol.iterator]() == it);
for (let i of it) console.log(i);

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
console.log(JSON.stringify(it));
