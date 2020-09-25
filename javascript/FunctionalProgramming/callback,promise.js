// callback 패턴
function add10(input, callback) {
  setTimeout(() => {
    callback(input + 10);
  }, 500);
}

var a = add10(5, (res) => {
  add10(res, (res) => {
    add10(res, (res) => {
      add10(res, (res) => {
        console.log(res);
      });
    });
  });
});

// promise 체인 패턴
function add20(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(input + 20);
    }, 500);
  });
}
add20(5).then(add20).then(add20).then(add20).then(console.log);

const fetchNum = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNum
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num / 2), 1000);
    });
  })
  .then(console.log);

// ! promise.then의 중요한 규칙
// ? then 으로 꺼냈을 때 반드시 Promise가 아닐 수 있다.
console.clear();
Promise.resolve(Promise.resolve(Promise.resolve(1))).then(console.log);
