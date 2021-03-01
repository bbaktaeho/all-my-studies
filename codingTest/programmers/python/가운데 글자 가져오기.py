def solution(s):
    l = len(s)
    return s[l // 2 - 1] + s[l // 2] if l % 2 == 0 else s[l // 2]


print(solution("qwer"))