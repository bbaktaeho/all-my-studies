const { curry } = require('../lib/fx');

const multi = curry((a, b) => a * b); // curry 함수가 함수를 리턴
console.log(multi(2, 5));
console.log(multi(1).toString()); // 리턴 받은 함수에 인자를 한 개만 줬을 때
console.log(multi(1)(3));

const multi3 = multi(3);
console.log(multi3(10));
console.log(multi3(20));
console.log(multi3(5));
