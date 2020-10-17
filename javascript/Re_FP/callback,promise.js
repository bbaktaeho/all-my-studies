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
const delay100 = a => new Promise(resolve => setTimeout(() => resolve(a), 100));
const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
const add5 = a => a + 5;

const n1 = 10;
const n2 = delay100(10);

const r1 = go1(n1, add5); // go1(go1(n1, add5), console.log);
console.log(r1);
const r2 = go1(n2, add5); // go1(go1(n2, add5), console.log);
r2.then(console.log);
