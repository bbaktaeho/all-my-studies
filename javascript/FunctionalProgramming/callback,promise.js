// callback 패턴
function add10(input, callback) {
  setTimeout(() => {
    callback(input + 10);
  }, 500);
}

add10(5, (res) => {
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
