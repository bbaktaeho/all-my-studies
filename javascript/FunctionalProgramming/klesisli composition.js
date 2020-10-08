// Klesisli Composition
// 오류가 있을 수 있는 상황에서의 함수 합성 방법을 안전하게 하는 하나의 규칙
// 프로미스는 Klesisli Composition을 도와주는 도구
// f(g(x)) = f(g(x)) : 일반 수학적인 생각으로 보면 이 식은 성립
// f(g(x)) = g(x) : g에서 에러가 난 경우엔 f. g 결과나 g 만 한 결과나 같은 결과를 보이는 것이 Klesisli Composition
const find = (func, iter) => {
  for (let item of iter) {
    if (func(item)) return item;
  }
};

var users = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
];
const getUserById = (id) => find((u) => u.id == id, users) || Promise.reject('없습니다.');
var f = ({ name }) => name;
var g = getUserById;
// const fg = (id) => f(g(id));
// user.pop()을 하면 위험한 상황이 올 수 있음

const fg = (id) =>
  Promise.resolve(id)
    .then(g)
    .then(f)
    .catch((a) => a);

users.pop();
users.pop();

fg(2).then(console.log);
