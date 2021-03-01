def solution(n, arr1, arr2):
    result = []
    for i, j in zip(arr1, arr2):
        row = bin(i | j)[2:].rjust(n, "0").replace("1", "#").replace("0", " ")
        result.append(row)
    return result

# 테스트 1 〉	통과 (0.01ms, 10.1MB)
# 테스트 2 〉	통과 (0.02ms, 10.3MB)
# 테스트 3 〉	통과 (0.01ms, 10.1MB)
# 테스트 4 〉	통과 (0.01ms, 10.2MB)
# 테스트 5 〉	통과 (0.01ms, 10.2MB)
# 테스트 6 〉	통과 (0.02ms, 10.2MB)
# 테스트 7 〉	통과 (0.01ms, 10.2MB)
# 테스트 8 〉	통과 (0.01ms, 10.2MB)