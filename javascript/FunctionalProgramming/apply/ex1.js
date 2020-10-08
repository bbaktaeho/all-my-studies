const fxjs = require('fxjs');
/**
 * @description 홀수 n개를 limit 까지 제곱해서 더하기
 * @param {number} limit 뽑기 제한
 * @param {Iterable} list iterable
 */
// function f1(limit, list) {
//   let acc = 0;
//   for (const item of list) {
//     if (item % 2) {
//       const m = item * item;
//       acc += m;
//       if (--limit == 0) break;
//     }
//   }
//   console.log(acc);
// }

// f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function f1(limit, list) {
  let acc = 0;
  for (const item of list) {
    if (item % 2) {
      const m = item * item;
      acc += m;
      if (--limit == 0) break;
    }
  }
  console.log(acc);
}

f1(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
