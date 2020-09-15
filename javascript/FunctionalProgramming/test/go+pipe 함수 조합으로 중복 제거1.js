const { curryFilter, curry, curryReduce, curryMap } = require('../curryFunction');
const { go, pipe } = require('../go,pipe');
const products = require('../products');
console.clear();

const totalPrice = pipe(
  curryMap((p) => p.price),
  curryReduce((a, b) => a + b)
);

const setPrice = (predict) => pipe(curryFilter(predict), totalPrice);

// 2만원 이하 금액 모두 더하기
go(
  products,
  setPrice((p) => p.price < 20000),
  console.log
);

// 2만원 이상 금액 모두 더하기
go(
  products,
  setPrice((p) => p.price >= 20000),
  console.log
);
