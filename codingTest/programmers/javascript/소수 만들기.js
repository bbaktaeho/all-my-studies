function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num) + 1; i++) if (!(num % i)) return false;
  return true;
}

function solution(nums) {
  let count = 0;
  const size = nums.length;
  for (let i = 0; i < size - 2; i++) {
    for (let j = i + 1; j < size - 1; j++) {
      for (let k = j + 1; k < size; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) count++;
      }
    }
  }
  return count;
}
