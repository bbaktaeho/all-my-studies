def solution(n):
    sqrt = n ** (1 / 2)
    if int(sqrt) == sqrt:
        return (sqrt + 1) ** 2
    else:
        return -1
