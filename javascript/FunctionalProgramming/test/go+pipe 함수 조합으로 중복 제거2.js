const { curryMap, curryFilter, curryReduce, curry } = require('../curryFunction');
const { pipe, go } = require('../go,pipe');
const products = require('../products');
console.clear();

// 중복 제거, 추상화 레벨 높이기!
const add = (a, b) => a + b;
const total = curry((f, iter) => go(iter, curryMap(f), curryReduce(add))); // curry를 안 쓸 경우 생각해보기

// 커링함수 total 맛보기(추상화 레벨이 아주 높음..!)
const totalAge = total((u) => u.age, [{ age: 10 }, { age: 20 }, { age: 25 }]);
console.log(totalAge);

// 모든 상품의 수량 총합
// const totalQuantity = pipe(
//   curryMap((p) => p.quantity),
//   curryReduce(add)
// );
const totalQuantity = total((p) => p.quantity);
console.log(totalQuantity(products));

// 모든 상품의 가격 총합
// const totalPrice = pipe(
//   curryMap((p) => p.price * p.quantity),
//   curryReduce(add)
// );
const totalPrice = total((p) => p.price * p.quantity);
console.log(totalPrice(products));
