import itertools

# * 소수 확인
def isPrime(num):
    if num <= 2: return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0: return False
    return True

def solution(numbers):
    numArr = list(numbers)
    N = len(numArr) # 숫자의 개수

    # * 소수들의 집합
    primeSet = set()
    for i in numArr: 
        if int(i) in (2,3,5,7): primeSet.add(int(i))
    for i in range(2, N+1):
        # * 순열 리스트
        PA = list(itertools.permutations(numArr, i))
        for pair in PA:
            num = int("".join(pair))
            if isPrime(int("".join(pair))): 
                primeSet.add(num)
    return len(primeSet)
