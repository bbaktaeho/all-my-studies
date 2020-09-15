const { curry } = require('../curryFunction');
console.clear();

const multi = curry((a, b) => a * b);

console.log(multi.toString());
console.log(multi(1).toString());
console.log(multi(1, 2).toString());
console.log(multi(1, 2, 3).toString()); // curry의 인자로 보낸 함수가 단 두 개만의 인자를 받는 함수라서 앞의 1, 2만 사용됨
console.log(multi(1)(2).toString());
