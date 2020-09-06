const products = [
  { name: "반팔1", price: 15000 },
  { name: "반팔2", price: 20000 },
  { name: "반팔3", price: 3000 },
  { name: "반팔4", price: 40000 },
];

// 순수 함수
// 함수형 프로그래밍 과정
const map = (func, iter) => {
  let res = [];
  for (p of iter) res.push(func(p));
  return res;
};

console.log(map((p) => p.name, products));
console.log(map((p) => p.price, products));

// 이터러블 프로토콜을 따른 map의 다형성
// console.log(document.querySelectorAll('*').map()); // 배열 상속을 받지 않음, 이터러블은 맞음
// 제너레이터에서 순수함수 map 적용
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
console.log(
  map((a) => a * a, gen()),
);

let m = new Map();
m.set("a", 10); // -> ["a", 10]
m.set("b", 20);
const it = m[Symbol.iterator]();
console.log(new Map(map(([k, v]) => [k, v * 2], m)));
