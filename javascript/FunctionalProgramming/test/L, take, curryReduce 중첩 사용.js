const { curryReduce, curryMap, curryFilter } = require('../curryFunction');
const { go } = require('../go,pipe');
const L = require('../lazyEvaluation'); // 지연성 평가
const { range, take } = require('../range,take'); // 즉시평가 range
console.clear();

// 즉시 평가
console.time('');
go(
  range(100000), // [0,1,2,3,4,5,6,7,8,9, ...]
  curryMap((n) => n + 10), // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, ...]
  curryFilter((n) => n % 2), // [11, 13, 15, 17, 19, ...]
  take(10), // [11, 13, ...]
  console.log
);
console.timeEnd('');

// 지연성 평가
// take 부터 시작 (이전 L 요소들은 실행했지만 몸체 코드는 동작 안 함)
console.time('');
go(
  L.range(100000), // 십만개 만들기 귀차나.. 필요할 때 가져다 써
  L.map((n) => n + 10),
  L.filter((n) => n % 2),
  take(10),
  console.log
);
console.timeEnd('');
