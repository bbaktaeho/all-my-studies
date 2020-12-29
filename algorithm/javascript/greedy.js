function minCoin(value, list) {
  list.sort((a, b) => b - a);
  let totalCount = 0;
  let count = 0;
  const details = [];
  list.some((e, i) => {
    count = Math.floor(value / e);
    totalCount += count;
    value -= count * e;
    details.push({ [e]: count });
  });
  console.log(details);
  return totalCount;
}

const result = minCoin(4720, [500, 100, 50, 10]);
console.log(result);

const list = [
  [15, 12],
  [20, 10],
  [10, 10],
  [25, 8],
  [30, 5],
];
function maxValue(list, capacity) {
  list.sort((a, b) => b[1] / b[0] - a[1] / a[0]);
  let totalValue = 0;
  const details = [];
  list.some(e => {
    if (capacity - e[0] >= 0) {
      capacity -= e[0];
      totalValue += e[1];
      details.push({ [e[0]]: e[1], m: 1 });
    } else {
      let fraction = capacity / e[0];
      totalValue += e[1] * fraction;
      details.push({ [e[0]]: e[1], m: fraction });
      return true; // break
    }
  });
  console.log(details);
  console.log(totalValue);
}

maxValue(list, 30);
