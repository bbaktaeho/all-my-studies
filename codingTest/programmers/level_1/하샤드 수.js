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
