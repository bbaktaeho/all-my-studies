const solution = (arr, divider) => {
  const result = arr.filter(e => e % divider == 0).sort((a, b) => a - b);
  return result.length ? result : [-1];
};
