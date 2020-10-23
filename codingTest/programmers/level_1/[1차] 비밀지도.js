var solution = (n, arr1, arr2) => {
  var f = e => {
    const arr = e.toString(2).split('');
    arr.length < n ? arr.unshift('0'.repeat(n - arr.length)) : '';
    return arr.join('').split('').map(Number);
  };
  arr1 = arr1.map(f);
  arr2 = arr2.map(f);

  const result = [];
  for (const i in arr1) {
    const row = [];
    for (const j in arr1[i]) row.push(arr1[i][j] + arr2[i][j]);
    result.push(row.map(e => (e == 0 ? ' ' : '#')));
  }
  return result.map(e => e.join(''));
};
