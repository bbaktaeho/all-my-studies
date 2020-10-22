function solution(array, commands) {
  var answer = [];
  commands.forEach(el =>
    answer.push(array.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1]),
  );
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
);
