const { flatten } = require('../flatten');
const { go } = require('../go,pipe');
const L = require('../lazyEvaluation');
const { take } = require('../range,take');
console.clear();
const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

// 즉시 순회
go(arr, flatten, console.log);
go(
  arr,
  L.flatten,
  L.filter((a) => a % 2),
  take(10), // take를 빼면 지연 평가라서 사용하는 코드가 없음. 숫자가 커져도 최대는 arr를 펼치고 필터한 크기까지
  console.log
);

console.clear();
// ! 실무에 적용!!!!
var users = [
  {
    name: 'a',
    age: 21,
    family: [
      { name: 'a1', age: 53 },
      { name: 'a2', age: 47 },
      { name: 'a3', age: 16 },
      { name: 'a4', age: 15 },
    ],
  },
  {
    name: 'b',
    age: 24,
    family: [
      { name: 'b1', age: 58 },
      { name: 'b2', age: 51 },
      { name: 'b3', age: 19 },
      { name: 'b4', age: 22 },
    ],
  },
  {
    name: 'c',
    age: 31,
    family: [
      { name: 'c1', age: 64 },
      { name: 'c2', age: 62 },
    ],
  },
  {
    name: 'd',
    age: 20,
    family: [
      { name: 'd1', age: 42 },
      { name: 'd2', age: 42 },
      { name: 'd3', age: 11 },
      { name: 'd4', age: 7 },
    ],
  },
];

go(
  users,
  L.map((user) => user.family), // 가족들만 따로 뽑음
  L.flatten, // 펼침
  L.filter((user) => user.age < 20), // 성인이 아닌 사람들 뽑기
  L.map((user) => user.name), // 이름만 뽑기
  take(Infinity),
  console.log
);
