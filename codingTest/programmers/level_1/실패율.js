var solution = (n, stages) => {
  const result = [];
  do {
    var challenge = stages.filter(e => e >= n);
    result.unshift({
      stage: n,
      rate: challenge.filter(e => e == n).length / (challenge.length || 0),
    });
  } while (--n != 0);
  return result.sort((a, b) => b.rate - a.rate).map(e => e.stage);
};
