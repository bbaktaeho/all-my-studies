var solution = (progresses, speeds) => {
  const arr = [];
  while (progresses.length) {
    while (progresses[0] < 100) for (let i in speeds) progresses[i] += speeds[i];
    let count = 0;
    while (progresses[0] >= 100) {
      count++;
      progresses.shift();
      speeds.shift();
    }
    arr.push(count);
  }
  return arr;
};

// 테스트 1 〉	통과 (0.09ms, 30.1MB)
// 테스트 2 〉	통과 (0.68ms, 29.9MB)
// 테스트 3 〉	통과 (0.80ms, 30.2MB)
// 테스트 4 〉	통과 (0.38ms, 30MB)
// 테스트 5 〉	통과 (0.11ms, 29.9MB)
// 테스트 6 〉	통과 (0.15ms, 30MB)
// 테스트 7 〉	통과 (0.76ms, 30MB)
// 테스트 8 〉	통과 (0.16ms, 30MB)
// 테스트 9 〉	통과 (0.66ms, 29.7MB)
// 테스트 10 〉	통과 (0.69ms, 30.1MB)
// 테스트 11 〉	통과 (0.09ms, 30MB)
