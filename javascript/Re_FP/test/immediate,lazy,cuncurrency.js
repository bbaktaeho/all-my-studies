const { go, map, filter, take, C, L } = require('../lib/fx');

// 즉시, 지연, 병렬 조합하기!
const delay500 = (a, name) =>
  new Promise(resolve => {
    console.log(`${name}, ${a}`);
    setTimeout(() => resolve(a), 500);
  });

// immediate evaluation
// console.time('');
// go(
//   [1, 2, 3, 4, 5, 6, 7, 8],
//   map(a => delay500(a * a, 'map-1')),
//   filter(a => delay500(a % 2, 'filter-2')),
//   map(a => delay500(a + 1, 'map-3')),
//   take(2),
//   console.log,
//   _ => console.timeEnd(''),
// );

// lazy evaluation
// console.time('');
// go(
//   [1, 2, 3, 4, 5, 6, 7, 8],
//   L.map(a => delay500(a * a, 'map-1')),
//   L.filter(a => delay500(a % 2, 'filter-2')),
//   L.map(a => delay500(a + 1, 'map-3')),
//   take(2),
//   console.log,
//   _ => console.timeEnd(''),
// );

// concurrency evaluation
// console.time('');
// go(
//   [1, 2, 3, 4, 5, 6, 7, 8],
//   C.map(a => delay500(a * a, 'map-1')),
//   L.filter(a => delay500(a % 2, 'filter-2')),
//   L.map(a => delay500(a + 1, 'map-3')),
//   take(2),
//   console.log,
//   _ => console.timeEnd(''),
// );

console.time('');
go(
  [1, 2, 3, 4, 5, 6, 7, 8],
  L.map(a => delay500(a * a, 'map-1')),
  L.filter(a => delay500(a % 2, 'filter-2')),
  L.map(a => delay500(a + 1, 'map-3')),
  C.take(2),
  console.log,
  _ => console.timeEnd(''),
);
