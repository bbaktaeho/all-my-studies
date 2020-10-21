function solution(n) {
  var a = parseInt(Math.sqrt(n));
  return a * a == n ? (a + 1) ** 2 : -1;
}
