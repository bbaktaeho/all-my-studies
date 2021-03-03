function solution(nums) {
  const size = nums.length;
  const set = new Set(nums);
  return set.size > size / 2 ? size / 2 : set.size;
}
