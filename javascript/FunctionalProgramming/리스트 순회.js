const list = [1, 2, 3];
const str = "문자열";

// es5
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// es6
for (const i of list) {
  console.log(i);
}
for (const i of str) {
  console.log(i);
}
const obj = {};

const set = new Set([4, 5, 6, 6]);
for (let s of set) console.log(s);

const map = new Map([
  ["key1", 7],
  ["key2", 7],
  ["key3", 8],
  ["key4", 9],
]);
for (let m of map) console.log(m);
for (let m of map.keys()) console.log(m);
for (let m of map.values()) console.log(m);
for (let m of map.entries()) console.log(m);

// Symbol
// Symbol.iterator : 객체의 키로 사용 가능
/**
 * @description 이터러블과 이터레이터 프로토콩
 * @이터러블 이터레이터를 리턴하는 [Symbol.iterator()] 를 가진 값
 * @이터레이터 {value, done} 객체는 리턴하는 next() 를 가진 값, done이 트루일 경우 빠져나옴 -> iterator.next()
 * @이터러블 @이터레이터 @프로토콜 이터러블은 for of, 전개 연산자 등과 함께 동작하도록한 규약
 */
const itExList = [1, 2, 3];
let itr = itExList[Symbol.iterator]();
console.log(itr.next());

// ! 사용자 정의 이터러블
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i == 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const arr2 = [1, 2, 3];
const arr2Itr = arr2[Symbol.iterator]();
