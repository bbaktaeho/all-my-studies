// curry
// 함수를 받아서 함수를 리턴
// 인자(함수)를 받아서 인자가 원하는 개수만큼의 인자가 들어왔을 때 받아두었던 함수를 나중에 평가시키는 함수
const curry = f => (arg, ..._) =>
  _.length ? f(arg, ..._) : (..._) => f(arg, ..._);

const multi = curry((a, b) => a * b); // curry 함수가 함수를 리턴
console.log(multi(2, 5));
console.log(multi(1).toString()); // 리턴 받은 함수에 인자를 한 개만 줬을 때
console.log(multi(1)(3));

const multi3 = multi(3);
console.log(multi3(10));
console.log(multi3(20));
console.log(multi3(5));
