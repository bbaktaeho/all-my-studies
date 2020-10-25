var solution = (progresses, speeds) => {
  let count = 0;
  const result = [];
  while (progresses.length > 0) {
    if (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
      continue;
    } else {
      if (count) {
        result.push(count);
        count = 0;
      }
      progresses.forEach((e, i) => (progresses[i] += speeds[i]));
      continue;
    }
  }
  result.push(count);
  return result;
};

console.log(solution([0, 0, 0, 0], [100, 50, 34, 25]));
