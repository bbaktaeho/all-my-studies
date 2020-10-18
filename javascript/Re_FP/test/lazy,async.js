const { go, map, filter, take, reduce, L } = require('../lib/fx');

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
