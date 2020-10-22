const { L, go, range, map, filter, take } = require('../lib/fx');

// 즉시 평가
console.time('');
go(
  range(100000),
  map(n => n + 10),
  filter(n => n % 2),
  take(2),
  console.log,
);
console.timeEnd('');

// 지연 평가
console.time('');
go(
  L.range(100000),
  L.map(n => n + 10),
  L.filter(n => n % 2),
  take(2),
  console.log,
);
console.timeEnd('');
