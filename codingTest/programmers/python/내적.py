def solution(a, b):
    result = 0
    for i, j in zip(a, b):
        result += i * j
    return result


# 테스트 1 〉	통과 (0.12ms, 10.2MB)
# 테스트 2 〉	통과 (0.01ms, 10.2MB)
# 테스트 3 〉	통과 (0.01ms, 10.2MB)
# 테스트 4 〉	통과 (0.02ms, 10.2MB)
# 테스트 5 〉	통과 (0.01ms, 10.1MB)
# 테스트 6 〉	통과 (0.07ms, 10.2MB)
# 테스트 7 〉	통과 (0.09ms, 10.2MB)
# 테스트 8 〉	통과 (0.11ms, 10.2MB)
# 테스트 9 〉	통과 (0.11ms, 10.2MB)


def solution(a, b):
    return sum([i * j for i, j in zip(a, b)])


# 위와 같은 속도입니당
