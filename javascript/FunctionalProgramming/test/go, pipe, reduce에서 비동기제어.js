const { go } = require('../go,pipe');
console.clear();

go(
  Promise.resolve(1),
  (a) => a + 10,
  (a) => Promise.resolve(a + 100),
  (a) => Promise.reject('error'),
  (a) => console.log('..'),
  (a) => a + 10000,
  console.log
).catch((err) => console.log(err));
