const { go, map, filter, take, L } = require('../lib/fx');

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
