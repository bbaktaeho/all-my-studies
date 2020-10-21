function solution(s) {
  var op = '';
  var str = '';
  !Number(s[0])
    ? ((op = s.substring(0, 1)), (str = s.substring(1)))
    : (str = s);
  return op == '-' ? -Number(str) : Number(str);
}

var solution = n => +n;

const s = '+1234';
console.log(s.substring(0, 1));
console.log(s);
console.log(Number('+'));
