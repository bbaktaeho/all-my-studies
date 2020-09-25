const { go } = require('../go,pipe');
const L = require('../lazyEvaluation');
const { take } = require('../range,take');
console.clear();

go(
  [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)],
  L.map((a) => a + 10),
  take(2),
  console.log
);
