const { pipe } = require('./go,pipe');
const L = require('./lazyEvaluation');
const { take } = require('./range,take');
console.clear();

// 즉시 펼쳐줌
const flatten = pipe(L.flatten, take(Infinity));

module.exports = { flatten };
