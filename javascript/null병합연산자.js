/**
 * @title nullish coalescing operator
 * @description 여러 피연산자 중 그 값이 확정되어있는 변수를 찾을 수 있음
 */

const a = "A"
const test1 = a ?? 'AA'
const test2 = (a !== null && a !== undefined) ? a : 'AA';

console.log(test2);

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "Anonymous");