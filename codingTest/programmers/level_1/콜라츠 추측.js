var solution = n => {
  var count = 0;
  while (n != 1) {
    n = n % 2 ? n * 3 + 1 : n / 2;
    if (++count > 500) return -1;
  }
  return count;
};
