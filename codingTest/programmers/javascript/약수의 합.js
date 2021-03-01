function solution(n) {
  for (var i = 1, sum = 0; i <= n / 2; i++) if (n % i == 0) sum += i;
  return n + sum;
}
