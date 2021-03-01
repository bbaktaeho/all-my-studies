const solution = arr => {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [];

  let countOne = 0;
  let countTwo = 0;
  let countThree = 0;
  arr.some((e, i) => {
    if (one[i % one.length] == e) countOne++;
    if (two[i % two.length] == e) countTwo++;
    if (three[i % three.length] == e) countThree++;
  });
  const maxCount = Math.max(countOne, countTwo, countThree);
  if (maxCount == countOne) result.push(1);
  if (maxCount == countTwo) result.push(2);
  if (maxCount == countThree) result.push(3);
  return result;
};
