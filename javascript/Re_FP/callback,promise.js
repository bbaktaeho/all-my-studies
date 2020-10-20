const add10 = (a, callback) => {
  setTimeout(() => callback(a + 10), 100);
};

add10(5, res => {
  add10(res, res => {
    add10(res, res => {
      console.log(res);
    });
  });
});

const add20 = a =>
  new Promise(resolve => setTimeout(() => resolve(a + 20), 100));

// 비동기 상황을 일급으로 다룬다?!
// 프로미스와 콜백과 가장 특별한 차이점은 일급 값으로 비동기 상황을 다루는 것!
add20(5).then(add20).then(add20).then(add20).then(console.log);
console.clear();
const delay100 = a =>
  new Promise(resolve => setTimeout(() => resolve(a), 2000));
const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
const add5 = a => a + 5;

const n1 = 10;
const n2 = delay100(10);

const r1 = go1(n1, add5); // go1(go1(n1, add5), console.log);
console.log(r1);
const r2 = go1(n2, add5); // go1(go1(n2, add5), console.log);
r2.then(console.log);

// 함수 합성 관점에서 Promise와 모나드
// 함수 합성을 안전하게 합성할 수 있게 하는 것 중 모나드라는 개념이 있음
var g = a => a + 1;
var f = a => a * a;

console.log(f(g(1)));
// 잘못된 값이 온다면? 안전하게 합성이 불가능함
// 이러한 상황에서 어떠한 값들이 들어올 지 모르는 상황에서 함수합성을 어떻게 안전하게 합성할 수 있을까? -> 모나드
console.log(f(g()));

// 모나드는 박스[]를 가지고 있고 연산에 필요한 재료들을 가지고 있음
// 자바스크립트에서 모나드를 구현하는 법은 map을 이용한다
// 박스안에 아무런 값이 없다면 효과까지 가지 않는다!!!
Array.of(1)
  .map(g)
  .map(f)
  .forEach(r => console.log(r));

// Promise는 어떠한 함수 합성을 하는 값일까?
// Promise는 then 함수로 합성한다
// 하지만 이것은 잘못된 값이 효과까지 이어진다 (불안전)
Promise.resolve(2)
  .then(g)
  .then(f)
  .then(r => console.log(r));

// 어느 시점 이후에 값을 알 수 있는 효과를 가진 박스(모나드)라고 보면 이 함수를 합성하는 시점을 안전하게 만드는 성질을 가지고 있는 것
// Promise도 마찬가지로 함수 합성을 안전하게 할 수 있는 도구인데 이를 모나드라고 함
new Promise(resolve => setTimeout(() => resolve(2), 100))
  .then(g)
  .then(f)
  .then(r => console.log(r));

// Kleisli Composition
// Promise는 Kleisli Composition를 지원하는 도구라고 볼 수 있음
// 클레이슬리 컴포지션은 오류가 있을 수 있는 상황에서의 함수 합성을 안전하게 하는 하나의 규칙!
// f(g(x)) = g(x)   -> g 함수에서 에러가 발생했을 때 둘은 같을 수 있음
const { find } = require('./lib/fx');

const users = [
  { id: 1, name: 'aa' },
  { id: 2, name: 'bb' },
  { id: 3, name: 'cc' },
];
const getUserById = id =>
  find(u => u.id == id, users) || Promise.reject('없습니당');
var f = ({ name }) => name;
var g = getUserById;
// var fg = id => f(g(id)); // 에러 발생할 수 있음

// 안전한 함수 합성(클레이슬리)
var fg = id =>
  Promise.resolve(id)
    .then(g)
    .then(f)
    .catch(a => a);

fg(4).then(console.log);
