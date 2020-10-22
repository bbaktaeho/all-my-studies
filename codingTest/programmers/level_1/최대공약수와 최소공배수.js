var solution = (n, m) => {
  var max, min;
  n >= m ? ((max = n), (min = m)) : ((max = m), (min = n));
  var nmg;
  do {
    nmg = max % min;
    if (!nmg) return [min, (n * m) / min];
    else {
      max = min;
      min = nmg;
    }
  } while (true);
};

console.log(solution(4, 18));
