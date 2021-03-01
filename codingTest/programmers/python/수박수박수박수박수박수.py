def solution(n):
    s = "수박"
    result = ""
    i = 0
    for _ in range(n):
        i = 1 if i == 1 else 0
        result += s[i]
        i += 1
    return result
