var solution = (x, n) =>
  Array(n)
    .fill(x)
    .map((e, i) => (i + 1) * e);
