var solution = (numbers, hand) => {
  hand = hand == 'right' ? 'R' : 'L';
  var left = [3, 0];
  var right = [3, 2];
  var tempHand;
  var result = '';
  for (const n of numbers) {
    if (n == 1 || n == 4 || n == 7) {
      left = n == 1 ? [0, 0] : n == 4 ? [1, 0] : [2, 0];
      result += 'L';
    } else if (n == 3 || n == 6 || n == 9) {
      right = n == 3 ? [0, 2] : n == 6 ? [1, 2] : [2, 2];
      result += 'R';
    } else {
      switch (n) {
        case 2:
          tempHand = checkHand(left, right, [0, 1], hand);
          result += tempHand;
          tempHand == 'R' ? ((right = [0, 1]), 'R') : ((left = [0, 1]), 'L');
          break;
        case 5:
          tempHand = checkHand(left, right, [1, 1], hand);
          result += tempHand;
          tempHand == 'R' ? ((right = [1, 1]), 'R') : ((left = [1, 1]), 'L');
          break;
        case 8:
          tempHand = checkHand(left, right, [2, 1], hand);
          result += tempHand;
          tempHand == 'R' ? ((right = [2, 1]), 'R') : ((left = [2, 1]), 'L');
          break;
        case 0:
          tempHand = checkHand(left, right, [3, 1], hand);
          result += tempHand;
          tempHand == 'R' ? ((right = [3, 1]), 'R') : ((left = [3, 1]), 'L');
          break;
      }
    }
  }
  return result;
};

function checkHand(l, r, point, h) {
  let lSum = 0;
  let rSum = 0;
  for (let i = 0; i < 2; i++) {
    lSum += Math.abs(l[i] - point[i]);
    rSum += Math.abs(r[i] - point[i]);
  }
  return lSum == rSum ? h : lSum > rSum ? 'R' : 'L';
}
