var solution = x =>
  x %
  String(x)
    .split('')
    .reduce((e, acc) => +e + +acc)
    ? false
    : true;

console.log(
  String(11)
    .split('')
    .reduce((e, acc) => +e + +acc),
);

const arr = Array(10000000).fill(1);

console.time('');
for (const i of arr) {
}
console.timeEnd('');
console.time('');
arr.shift();
console.timeEnd('');
