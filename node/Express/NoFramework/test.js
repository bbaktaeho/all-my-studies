async function getNumber(num) {
  return Number(num);
}

const getString = async params => String(params);

console.log(getNumber(2));
console.log(getString(12325));

async function main() {
  try {
    const p = await new Promise((resolve, reject) => {
      // 비동기 코드
      // 비동기 로직이 성공적으로 끝난다면
      //   if(성공적?) resolve(데이터);
      //   else reject(예외);
    });
    // 이 시점에 p 상수는 성공적인 데이터가 할당
  } catch (e) {
    // try scope에서 Promise가 reject되면 예외가 e에 할당
    console.error(e);
  }
}

const getPromise = () =>
  new Promise((resolve, reject) => {
    // 비동기 로직
  });

const timeout = params =>
  new Promise(resolve => {
    setTimeout(() => resolve(`데이터: ${params}`), 2000);
  });

const main = async () => {
  console.time('얼마나 걸릴까');
  const arr = await Promise.all([timeout(1), timeout(2), timeout(3)]);
  console.timeEnd('얼마나 걸릴까');
  console.log(arr);
};

main();

const fetchNum = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
fetchNum
  .then(num => num * 2) // 1초를 기다렸다가 resolve된 1을 num으로 받아옴
  .then(num => num * 3) // 위의 then에서 Promise.resolve(1*2)로 평가된 Promise이므로 또 then으로 resolve된 2를 num으로 받아오게됨
  .then(num => {
    // 여기 콜백함수의 인자값으로 2*3
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num / 2), 1000);
    });
  })
  .then(console.log); // 최종 콘솔에 1초 + 1초가 지난 후 6/2 값을 출력

const add1 = a =>
  new Promise(resolve => setTimeout(() => resolve(a + 1), 1000));
add1(0)
  .then(add1)
  .then(add1)
  .then(add1)
  .then(add1)
  .then(add1)
  .then(add1)
  .then(console.log);
