const { L, go, map, reduce, pipe, curry } = require('../lib/fx');

const join = curry((sep, iter) => reduce((a, b) => `${a}${sep}${b}`, iter));

L.entries = function* (obj) {
  for (const i in obj) yield [i, obj[i]];
};

// 객체를 통해 쿼리스트링 만들어보기
// const queryStr = pipe(
//   Object.entries,
//   map(([k, v]) => `${k}=${v}`),
//   // reduce((a, b) => `${a}&${b}`),
//   join('&'),
// );

const queryStr = pipe(
  L.entries,
  map(([k, v]) => `${k}=${v}`),
  join('&'),
);

console.log(queryStr({ limit: 10, offset: 10, type: 'notice' }));
