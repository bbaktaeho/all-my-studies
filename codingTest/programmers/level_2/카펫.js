function isPrime(num) {
  if (num == 1) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) if (!(num % i)) return false;
  return true;
}
const getBrown = pair => pair[0] * 2 + (pair[1] - 2) * 2;
function createCarpet(b, y) {
  const result = [];
  for (let i = 2; i <= Math.floor(y / 2); i++)
    if (!(y % i)) result.push([y / i + 2, i + 2]);
  return result.filter(e => e[0] >= e[1]).find(e => b == getBrown(e));
}
const solution = (b, y) => (isPrime(y) ? [y + 2, 3] : createCarpet(b, y));
