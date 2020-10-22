const arr = [1, 2, 3, 4, 5, 6, 7];

// for of
for (const item of arr) {
  console.log(item);
}

// for of 동작 과정
const iter = arr[Symbol.iterator]();
let cur;
while (!(cur = iter.next()).done) {
  const item = cur.value;
  console.log(item);
}
