function solution(n) {
  var answer = 0;
  var three = [];
  while (n > 2) {
    three.unshift(n % 3);
    n = parseInt(n / 3);
  }
  three.unshift(n);
  for (var i in three) answer += parseInt(three[i] * Math.pow(3, i));
  return answer;
}

var n = 45;
console.log(parseInt([...n.toString(3)].reverse().join(''), 3));
