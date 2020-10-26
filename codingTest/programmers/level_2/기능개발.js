var solution = (progresses, speeds) => {
  const arr = [];
  while (progresses.length) {
    let count = 0;
    for (const i in progresses) progresses[i] += speeds[i];
    while (progresses[0] >= 100) {
      count++;
      progresses.shift();
      speeds.shift();
    }
    if (count) arr.push(count);
  }
  return arr;
};
