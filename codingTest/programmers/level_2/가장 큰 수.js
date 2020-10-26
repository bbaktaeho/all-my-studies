var solution = n => {
  let result = '';
  n.map((e, i) => [i, ('' + e).repeat(3)])
    .sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0))
    .forEach(e => (result += n[e[0]]));
  return Number(result) ? result : '0';
};
