var solution = (numbers, head) => {
  var keyPad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];
  var left = [4, 1];
  var right = [4, 3];
  var result = '';
  for (const n of numbers) {
    if (n == 1 || n == 2 || n == 3) {
      result += 'L';
    }
  }
};
