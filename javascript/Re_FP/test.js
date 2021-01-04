function newArr(n) {
  let i = 1;
  const res = [];
  while (i < n) res.push(i++);
  return res;
}
function* newArrGen(n) {
  let i = 1;
  while (i < n) {
    console.log(i);
    yield i++;
  }
}
function fiveArr(iter) {
  const res = [];
  for (const item of iter) {
    if (item % 5 == 0) res.push(item);
    else if (res.length == 2) break;
  }
  return res;
}

console.time('');
console.log(fiveArr(newArrGen(10000000)));
console.timeEnd('');

// console.log(fiveArr(newArrGen(10000000)));
