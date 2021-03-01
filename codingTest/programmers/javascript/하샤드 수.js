const solution = x => {
  let sum = 0;
  for (const i of String(x)) sum += +i;
  return x % sum ? false : true;
};

// var solution = x =>
//   x %
//   String(x)
//     .split('')
//     .reduce((e, acc) => +e + +acc)
//     ? false
//     : true;
