/**
 * 코드를 값으로 다루어 표현력 높이기
 */

const { reduce } = require('./map,filter,reduce');

// 인자들을 받아서 하나로 축약(reduce)
// 즉시 인자들을 전달해서 평가하는 함수
const go = (...args) => reduce((acc, f) => f(acc), args);
go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  console.log
);

// 함수들이 나열되어있을 때 합성 함수를 만드는 함수
// 내부에서 go 함수를 사용
const pipe = (f, ...fs) => (...args) => go(f(...args), ...fs); // fs를 다시 펼쳐줘야함 그대로 주면 리스트로 들어가기 때문임
const func1 = pipe(
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100
);
const func2 = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);
console.log(func1(0));
console.log(func2(0, 1));

module.exports = { go, pipe };
