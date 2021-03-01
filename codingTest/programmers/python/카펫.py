def isPrime(num):
    if num < 2: return False
    for i in range(2, int(num ** 0.5)+1):
        if num % i == 0: return False
    return True

def solution(brown, yellow):
    # 노란색 한 개일 때
    if yellow == 1: return [3, 3]
    # 노란색이 한 줄 일 때
    elif isPrime(yellow) or (yellow * 2 + 6) == brown: return [yellow+2, 3]
    # 나머지 녀석들
    else:
        multipleArr = []
        for i in range(2, yellow):
            if yellow % i == 0: multipleArr.append(i)
        multipleArr.reverse()
        for i in multipleArr:
            if (i + 2) * 2 + (yellow//i) * 2 == brown: return [i+2, yellow//i+2]

