var solution = (d, b) => {
  var result = 0;
  d.sort((a, b) => a - b).forEach(e => {
    if (!(b - e >= 0 ? ((b -= e), result++) : '')) return;
  });
  return result;
};
