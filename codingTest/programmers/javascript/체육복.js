const solution = (n, lost, reserve) => {
  let count = n - lost.length;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (const l in lost)
    for (const r in reserve)
      if (reserve[r] == lost[l]) (reserve[r] = -1), (lost[l] = -1);

  lost.forEach(l => {
    for (const i in reserve)
      if (reserve[i] == l - 1 || reserve[i] == l + 1) {
        reserve[i] = -1;
        break;
      }
  });
  return count + reserve.filter(e => e == -1).length;
};
