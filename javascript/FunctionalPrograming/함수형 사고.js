const products = [
  { name: "반팔1", price: 15000 },
  { name: "반팔2", price: 20000 },
  { name: "반팔3", price: 3000 },
  { name: "반팔4", price: 40000 },
];

const map = (func, iter) => {
  let res = [];
  for (item of iter) res.push(func(item));
  return res;
};

const filter = (func, iter) => {
  let res = [];
  for (item of iter) {
    if (func(item)) res.push(item);
  }
  return res;
};

const reduce = (func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (item of iter) acc = func(acc, item);
  return acc;
};

// 가격 뽑기
console.log(map((p) => p.price, products));

// 특정 이하의 상품 뽑기
console.log(map((p) => p, filter((p) => p.price < 20000, products)));

// 특정 이하의 상품을 뽑아 가격 더하기
console.log(reduce(
  (a, b) => a + b,
  map((p) => p.price, filter((p) => p.price < 20000, products)),
));

/**
 * 함수형 프로그래밍에서는 코드를 값으로 다루는 것을 많이 사용함
 * 코드를 값으로 다루어 표현력 높이기
 */
console.clear();

// 즉시 값을 평가하는데 사용함
// pipe는 함수들이 나열되어 있는 합성된 함수를 만드는 함수
const go = (...args) => reduce((a, f) => f(a), args);
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

go(0, (a) => a + 1, (a) => a + 10, (a) => a + 100, console.log);

const pipeF = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100,
);
console.log(pipeF(0, 1));
// go(0, f, f, f) -> 111
