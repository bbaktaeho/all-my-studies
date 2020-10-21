var solution = n => {
  let result = '';
  let i = 1;
  while (i <= n) i++ % 2 ? (result += '수') : (result += '박');
  return result;
};

const waterMelon = n => '수박'.repeat(n).slice(0, n);
