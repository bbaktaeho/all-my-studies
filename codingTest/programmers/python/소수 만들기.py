import itertools
def isPrime(num):
    if num == 2: return True
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0: return False
    return True

def solution(nums):
    count = 0
    for com in itertools.combinations(nums, 3):
        if isPrime(sum(com)): count += 1
    return count