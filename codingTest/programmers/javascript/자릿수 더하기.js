var solution = n => {
  let result = 0;
  for (let i of n.toString()) result += +i;
  return result;
};
