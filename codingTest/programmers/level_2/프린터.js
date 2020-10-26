var solution = (priorities, location) => {
  priorities = priorities.map((e, i) => [i, e]);
  let max = Math.max(...priorities.map(e => e[1]));
  let count = 0;
  while (priorities.length) {
    if (priorities[0][1] != max) priorities.push(priorities.shift());
    else {
      if ((++count, priorities.shift()[0] == location)) return count;
      max = Math.max(...priorities.map(e => e[1]));
    }
  }
};
