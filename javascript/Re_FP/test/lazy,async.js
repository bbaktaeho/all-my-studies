const { go, map, filter, take, reduce, L, curry, pipe } = require('../lib/fx');

go(
  [1, 2, 3],
  map(a => a + 10),
  take(2),
  console.log,
);

// 지연 평가 + Promise
go(
  [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
  map(a => a + 10),
  take(2),
  console.log,
);

go(
  [Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)],
  map(a => Promise.resolve(a + 10)),
  take(2),
  console.log,
);

// Kleisli Composition
go(
  [1, 2, 3, 4, 5, 6],
  L.map(a => Promise.resolve(a * a)),
  L.filter(a => a % 2),
  take(2),
  console.log,
);

go(
  [1, 2, 3, 4, 5, 6],
  map(a => Promise.resolve(a * a)),
  filter(a => a % 2),
  take(2),
  console.log,
);

// 지연성과 프로미스를 동시 지원하는 reduce로 만들어보기
go(
  [1, 2, 3, 4],
  L.map(a => Promise.resolve(a * a)),
  L.filter(a => a % 2),
  reduce((a, b) => a + b),
  console.log,
);

// 지연 평가 + Promise의 효율성
go(
  [1, 2, 3, 4, 5, 6],
  L.map(a => new Promise(resolve => setTimeout(() => resolve(a * a), 1000))),
  L.filter(a => a % 2),
  take(1), // 평가가 필요할 때만 빼니까 map에서 모두 기다리지 않는다!!
  console.log,
);

// 병렬적 동작
// 하나의 스레드에서도 시피유를 점유하는 것을 효율적으로 하게 할 수 있음
// 지연된 함수열을 병렬적으로 평가하기
const C = {};
const noop = () => {};
const catchNoop = arr => (
  arr.forEach(a => (a instanceof Promise ? a.catch(noop) : a)), arr
);
C.reduce = curry((f, acc, iter) => {
  const iter2 = catchNoop(iter ? [...iter] : [...acc]);
  return iter ? reduce(f, acc, iter2) : reduce(f, iter2);
});
const delay1000 = a =>
  new Promise(resolve => setTimeout(() => resolve(a), 1000));
// console.time('C: ');
// go(
//   [1, 2, 3, 4, 5],
//   L.map(a => delay1000(a * a)),
//   L.filter(a => a % 2),
//   // C.reduce((a, b) => a + b),
//   C.take(2),
//   console.log,
//   _ => console.timeEnd('C: '),
// );

C.take = curry((limit, iter) => take(limit, catchNoop([...iter])));
C.takeAll = C.take(Infinity);
C.map = curry(pipe(L.map, C.takeAll));
C.filter = curry(pipe(L.filter, C.takeAll));

console.clear();
C.map(a => delay1000(a * a), [1, 2, 3, 4]).then(console.log);
C.filter(a => delay1000(a % 2), [1, 2, 3, 4]).then(console.log);
