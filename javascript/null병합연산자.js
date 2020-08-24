// /**
//  * @title nullish coalescing operator
//  * @description 여러 피연산자 중 그 값이 확정되어있는 변수를 찾을 수 있음
//  */

// let a = "a는 널이 아닌 값"
// let test1 = a ?? '대체 값'
// let test2 = (a !== null && a !== undefined) ? a : '대체 값';

// console.log(test1);
// console.log(test2);

// a = null;
// test1 = a ?? '대체 값';
// test2 = (a !== null && a !== undefined) ? a : '대체 값';

// console.log(test1);
// console.log(test2);

// let first = null;
// let second = "이";
// let third = "삼";
// let fourth = null

// // null이나 undefined가 아닌 첫 번째 피연산자 찾기
// console.log(first ?? second ?? third ?? fourth ?? "Anonymous");

// // const first = "first";
// // const second = "second";
// // const third = null;
// // const result1 = first || second || third;
// // const result2 = second || first || second;
// // const result3 = third || second || first;

// // console.log(result1);
// // console.log(result2);
// // console.log(result3);

let value = NaN
let result = value ?? "정의되지 않은 변수"
console.log(result);

result = value || "falsy한 변수"
console.log(result);

 false
 null
 undefined
 0
 -0
 0n
 NaN
 ""