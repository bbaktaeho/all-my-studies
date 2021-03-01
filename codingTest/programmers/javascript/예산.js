const solution = (d, budget) => {
  d.sort((a, b) => a - b);
  let count = 0;
  d.some(e => {
    if (budget < e) return true;
    budget -= e;
    count++;
  });
  return count;
};

const solution = (d, budget) => {
  var result = 0;
  d.sort((a, b) => a - b);
  d.some(e => {
    if (!(budget >= e ? ((budget -= e), ++result) : false)) return true;
  });
  return result;
};
