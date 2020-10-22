var solution = n => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) result += i;
  }
  return result;
};
