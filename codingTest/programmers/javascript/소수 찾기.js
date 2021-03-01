const solution = n => {
  const arr = new Array(n + 1);
  let count = 0;
  for (let i = 2; i <= n; i++) arr[i] = i;
  for (let i = 2; i <= n; i++) {
    if (arr[i] == 0) continue;
    count++;
    for (let j = i + i; j <= n; j += i) {
      if (arr[j] == 0) continue;
      arr[j] = 0;
    }
  }
  return count;
};
// 테스트 1 〉	통과 (23.57ms, 40MB)
// 테스트 2 〉	통과 (21.35ms, 39.6MB)
// 테스트 3 〉	통과 (33.52ms, 40MB)
// 테스트 4 〉	통과 (22.87ms, 39.7MB)

function solution(n) {
  const arr = new Array(n + 1);
  for (let i = 2; i <= n; i++) arr[i] = i;
  for (let i = 2; i <= n; i++) {
    if (arr[i] == 0) continue;
    for (let j = i + i; j <= n; j += i) arr[j] = 0;
  }
  return arr.filter(e => e != 0).length;
}

// 테스트 1 〉	통과 (39.06ms, 41.1MB)
// 테스트 2 〉	통과 (36.72ms, 40.9MB)
// 테스트 3 〉	통과 (38.93ms, 41.2MB)
// 테스트 4 〉	통과 (36.82ms, 41MB)
