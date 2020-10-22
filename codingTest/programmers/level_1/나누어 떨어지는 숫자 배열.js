function solution(arr, divisor) {
  var answer = arr.filter(el => el % divisor == 0).sort((a, b) => a - b);
  return answer.length ? answer : [-1];
}
