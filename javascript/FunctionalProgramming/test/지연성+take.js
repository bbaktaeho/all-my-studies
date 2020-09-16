const { curry } = require('../curryFunction');
const L = require('../lazyEvaluation');
const { take } = require('../range,take');
const { go, pipe } = require('../go,pipe');
console.clear();
/**
 * 지연성 함수로 map, filter 만들기
 */
// ? const map2 = curry((f, iter) => go(iter, L.map(f), take(Infinity)));
// ? const map2 = curry((f, iter) => go( L.map(f, iter), take(Infinity)));
const map2 = curry(pipe(L.map, take(Infinity)));
console.log(map2((a) => a + 10, [1, 2, 3, 4]));
console.log(map2((a) => a + 10, L.range(10)));

const filter2 = curry(pipe(L.filter, take(Infinity)));
console.log(filter2((a) => a % 2, L.range(20)));
