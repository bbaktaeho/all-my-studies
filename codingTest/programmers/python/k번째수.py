def solution(arr, commands):
    result = []
    for li in commands:
        result.append(sorted(arr[li[0] - 1 : li[1]])[li[2] - 1])
    return result


print(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
