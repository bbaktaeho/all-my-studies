const { L, go, take } = require('../lib/fx');

const arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10],
];

go(
  arr,
  L.flatten,
  L.filter(a => a % 2),
  take(3),
  console.log,
);

const users = [
  {
    name: 'a',
    age: 21,
    family: [
      { name: 'a1', age: 53 },
      { name: 'a2', age: 43 },
      { name: 'a3', age: 20 },
      { name: 'a4', age: 26 },
    ],
  },
  {
    name: 'b',
    age: 18,
    family: [
      { name: 'b1', age: 57 },
      { name: 'b2', age: 58 },
      { name: 'b3', age: 10 },
      { name: 'b4', age: 15 },
    ],
  },
  {
    name: 'c',
    age: 11,
    family: [
      { name: 'c1', age: 47 },
      { name: 'c2', age: 38 },
      { name: 'c3', age: 20 },
      { name: 'c4', age: 15 },
    ],
  },
  {
    name: 'd',
    age: 33,
    family: [
      { name: 'd1', age: 67 },
      { name: 'd2', age: 59 },
      { name: 'd3', age: 40 },
      { name: 'd4', age: 33 },
    ],
  },
];

go(
  users,
  L.map(user => user.family),
  L.flatten,
  L.filter(user => user.age < 20),
  L.map(user => user.name),
  take(Infinity),
  console.log,
);

// 객체지향 프로그래밍은 데이터를 우선적으로 먼저 정리를 하고 메소드를 그 이후에 만들면서 작성
// 함수형 프로그래밍은 이미 만들어져있는 함수 조합이 있다면 그 함수 조합에 맞는 데이터를 구성하는 식으로 프로그래밍
// 보다 함수가 우선수위가 있는 프로그래밍이 됨
