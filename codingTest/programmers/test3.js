function solution(v) {
  //   const zero = [...new Set(isSpace(v, 0, 0, 0))].length;
  //   const one = [...new Set(isSpace(v, 0, 0, 1))].length;
  //   const two = [...new Set(isSpace(v, 0, 0, 2))].length;
  //   console.log([zero, one, two]);
  console.log(isSpace(v, 0, 0, 0));
  //   console.log(isSpace(v, 0, 0, 1));
  //   console.log(isSpace(v, 0, 0, 2));
}

function isSpace(v, i, j, select) {
  const result = [];
  if (i > v.length || j > v.length) return result;
  let count = 0;
  if (v[i][j] == select) {
    result.push(isSpace(v, i, j + 1, select));
    result.push(isSpace(v, i + 1, j, select));
  } else result.push([++count]);
  console.log(result);
}

solution([
  [0, 0, 1, 1],
  [1, 1, 1, 1],
  [2, 2, 2, 1],
  [0, 0, 0, 2],
]);
