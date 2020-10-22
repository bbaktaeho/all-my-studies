function solution(n, lost, reserve) {
  if (n < 2 || n > 30) throw new Error('error');
  var answer = 0;
  answer += n - lost.length;
  const s = (a, b) => a - b;
  lost.sort(s);
  reserve.sort(s);

  for (var l in lost) {
    for (var i in reserve)
      if (reserve[i] == lost[l]) {
        answer++;
        reserve[i] = -1;
        lost[l] = -1;
      }
  }

  lost.forEach(l => {
    for (var i in reserve) {
      if (reserve[i] == l - 1 || reserve[i] == l + 1) {
        answer++;
        reserve[i] = -1;
        break;
      }
    }
  });
  return answer;
}

console.log(solution(6, [5, 6], [4, 5]));
