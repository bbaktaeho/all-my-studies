function solution(s) {
  var answer = '';
  var i = s.length;
  if (i % 2) answer = s[Math.floor(i / 2)];
  else answer = s.substring(i / 2 - 1, i / 2 + 1);
  return answer;
}

console.log(solution('abcd'));

function extra(n) {
  var m = Math.floor(n.length / 2);
  return n.length % 2 === 1 ? n[m] : n[m - 1] + n[m];
}

console.log(extra('abcd'));
