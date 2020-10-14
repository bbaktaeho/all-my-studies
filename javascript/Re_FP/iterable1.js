var arr = [1,2,3];
for (let item of arr) console.log(item);

var set = new Set([1,2,3,3,5,2]);
var setIter = set[Symbol.iterator]();
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());
console.log(setIter.next());
for (let item of set) console.log(item);

var map = new Map([['a', 1],['b', 2],['c', 3]]);
for (let item of map) console.log(item);

// Symbol은 어떤 객체의 키로 사용할 수 있음
/**
 * 이터러블/이터레이터 프로토콜
 * Iterable: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
 * Iterator: {value, done} 객체를 리턴하는 next() 를 가진 값
 * 
 * 이터러블은 전개 연산자를 사용할 수 있음
 */