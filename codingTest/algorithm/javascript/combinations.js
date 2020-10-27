function getCombinations(arr, select) {
  console.log(`arr: `, arr, `select: ${select}`);
  const result = [];
  if (select == 1) return arr.map(e => [e]);

  arr.some((e, i, origin) => {
    const rest = origin.slice(i + 1);
    console.log(`${e}, rest: `, rest);
    const combinations = getCombinations(rest, select - 1);
    const attached = combinations.map(c => [e, ...c]);
    console.log(`${e}, attached: `, attached);
    result.push(...attached);
  });
  return result;
}
console.log(getCombinations([1, 2, 3], 2));
