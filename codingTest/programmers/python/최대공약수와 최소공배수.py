def solution(a, b):
    gcm = 0
    for i in range(1, min(a, b) + 1):
        if a % i == 0 and b % i == 0:
            gcm = i
    return [gcm, (a * b) // gcm]
