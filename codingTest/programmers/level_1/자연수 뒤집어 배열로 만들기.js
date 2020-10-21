var solution = n =>
  String(n)
    .split('')
    .reverse()
    .map(e => +e);

console.log(solution('12345'));

var sol2 = n => {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
};
