const { curryMap } = require('./curryFunction');

function myMap(func, iter) {
  if (!iter && !iter[Symbol.iterator]) {
    return [];
  }
  let res = [];
  for (item of iter) res.push(func(item));
  return res;
}

function myDelay(a) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(a);
    }, 1000)
  );
}

async function main() {
  const result = await curryMap((a) => myDelay(a * a), [1, 2, 3, 4, 5, 6]);
  console.log(result);
}

main();
