const delay100 = (a) => new Promise((resolve) => setTimeout(() => resolve(a), 100));

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));
const add5 = (a) => a + 5;

// const result1 = go1(go1(10, add5), console.log);
// const result2 = go1(go1(delay100(10), add5), console.log);

// 프로미스는 비동기 상황에서 함수 합성을 안전하게 할 수 있는 도구(모나드)
const g = (a) => a + 1;
const f = (a) => a * a;

// 함수 합성
f(g(1));

// 모나드 형태로 함수 합성한다면 안전하게 할 수 있음
[] // 비어있다면 함수들을 실행하지 않음
  .map(g)
  .map(f)
  .forEach((r) => console.log(r));

Promise.resolve(2)
  .then(g)
  .then(f)
  .then((r) => console.log(r));

// Klesisli Composition
// 오류가 있을 수 있는 상황에서의 함수 합성 방법을 안전하게 하는 하나의 규칙
// 프로미스는 Klesisli Composition을 도와주는 도구
