var solution = (priorities, location) => {
  priorities = priorities.map((e, i) => [i, e]);
  let count = 0;
  let max = Math.max(...priorities.map(e => e[1]));
  while (true) {
    if (max == priorities[0][1]) {
      ++count;
      if (priorities.shift()[0] == location) return count;
      max = Math.max(...priorities.map(e => e[1]));
    } else priorities.push(priorities.shift());
  }
};

console.log(solution([2, 1, 3, 2], 2));
