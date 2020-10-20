function solution(arr) {
  return arr.filter((el, i, a) => i != arr.length && el != a[i + 1]);
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
