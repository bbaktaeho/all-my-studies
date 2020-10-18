const { go } = require('../lib/fx');

// go, pipe, reduce에서 비동기 제어
go(
  1,
  a => a + 10,
  a => a + 100,
  a => a + 1000,
  console.log,
);

// Promise가 있다면 catch 붙이기
go(
  Promise.resolve(1),
  a => a + 10,
  a => a + 100,
  a => a + 1000,
  console.log,
).catch(e => console.error(e));

// Promise가 있다면 catch 붙이기
go(
  Promise.resolve(1),
  a => a + 10,
  a => Promise.reject('error~~'),
  a => a + 1000,
  console.log,
).catch(e => console.error(e));

// Promise.then의 중요한 규칙
// then으로 꺼냈을 때 값이 반드시 Promise가 아니라는 규칙!
Promise.resolve(Promise.resolve(Promise.resolve(1))).then(console.log);

// * then의 두 번째 인자는 reject를 전달할 수 있다!!!!!!!
