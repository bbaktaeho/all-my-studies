const solution = (arr, commands) => {
  const result = [];
  commands.some(el => {
    result.push(arr.slice(el[0] - 1, el[1]).sort((a, b) => a - b)[el[2] - 1]);
  });
  return result;
};
