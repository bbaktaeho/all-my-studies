function getPermutations(arr, select) {
  console.log(`arr: `, arr, `select: ${select}`);
  const result = [];
  if (select == 1) return arr.map(e => [e]);

  arr.some((e, i, origin) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
    console.log(`${e}, rest: `, rest);
    const permutations = getPermutations(rest, select - 1);
    const attached = permutations.map(p => [e, ...p]);
    console.log(`${e}, attached: `, attached);
    result.push(...attached);
  });
  return result;
}

console.log(getPermutations([1, 2, 3], 2));
