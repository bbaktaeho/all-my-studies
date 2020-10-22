function solution(numbers) {
  var answer = [];

  numbers.forEach((n, i, arr) =>
    arr.forEach((an, j) => {
      if (i != j) answer.push(n + an);
    }),
  );
  answer = [...new Set(answer)];
  return answer.sort((a, b) => a - b);
}
