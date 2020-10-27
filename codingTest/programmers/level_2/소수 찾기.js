const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map(value => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map(permutation => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

const isPrime = num => {
  if (num == 0 || num == 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) if (!(num % i)) return false;
  return true;
};

const solution = numbers => {
  let all = [];
  const arr = numbers.split('');
  for (let i = 0; i < arr.length; i++) all.push(getPermutations(arr, i + 1));
  all = all.flat().flatMap(e => Number(e.join('')));
  all = [...new Set(all)];
  return all.filter(e => isPrime(e)).length;
};
