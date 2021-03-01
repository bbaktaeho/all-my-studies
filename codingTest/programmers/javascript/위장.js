function solution(cloths) {
  const hashMap = {};
  for (let item of cloths) hashMap[item[1]] = (hashMap[item[1]] || 0) + 1;
  for (let key in hashMap) hashMap[key]++;
  let count = 1;
  Object.values(hashMap).forEach(e => (count *= e));
  return count - 1;
}
