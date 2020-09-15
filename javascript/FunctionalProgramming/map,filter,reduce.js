/**
 * @description 기존 크기를 그대로 유지한 새로운 리스트를 반환
 * @param {iterable 요소 하나하나 처리하는 함수} func
 * @param {iterable} iter
 */
const map = (func, iter) => {
  let res = [];
  for (let item of iter) res.push(func(item));
  return res;
};

/**
 * @description 기존 크기가 같거나 작은 새로운 리스트를 반환
 * @param {iterable 요소 하나하나 처리하는 함수} func
 * @param {iterable} iter
 */
const filter = (func, iter) => {
  let res = [];
  for (let item of iter) {
    if (func(item)) res.push(item);
  }
  return res;
};

/**
 * @description 요소들을 누산하고 누산 결과를 나타내는 함수
 * @param {iterable 요소 하나하나 처리하는 함수} func
 * @param {accumulator} acc
 * @param {iterable} iter
 */
const reduce = (func, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    // 이터레이터가 아닌 애들을 이터레이터로 만들어버림
    acc = iter.next().value;
  }
  // 이터레이터가 돌려줌
  for (let item of iter) {
    acc = func(acc, item);
  }
  return acc;
};

module.exports = { map, filter, reduce };
