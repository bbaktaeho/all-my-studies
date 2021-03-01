def solution(n):
    a = list(str(n))
    a.sort(reverse=True)
    return int("".join(a))
