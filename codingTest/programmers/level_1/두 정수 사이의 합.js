function solution(a, b) {
  var max = Math.max(a, b);
  var min = Math.min(a, b);
  var sum = min;
  while (min != max) sum += ++min;
  return sum;
}
