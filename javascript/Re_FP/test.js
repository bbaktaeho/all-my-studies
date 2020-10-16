function* gen() {
  yield 1;
  yield 2;
  yield 3;
  return -1;
}

const iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
for (item of iter) console.log(item);
// iter객체는 모두 순회됨. 즉, done이 true가 됨
