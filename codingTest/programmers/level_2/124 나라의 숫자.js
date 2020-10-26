var solution = n => {
  let result = '';
  while (n) {
    result = n % 3 == 0 ? '4' + result : `${n % 3}` + result;
    n = n % 3 ? Math.floor(n / 3) : n / 3 - 1;
  }
  return result;
};
