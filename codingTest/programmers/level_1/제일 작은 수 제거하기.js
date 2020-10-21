var solution = arr => {
  var result = arr.filter(e => e != Math.min(...arr));
  return result.length ? result : [-1];
};
