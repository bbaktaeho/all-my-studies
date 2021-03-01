def solution(arr):
    result = []
    for i in range(len(arr)):
        if i - 1 < 0:
            continue
        if arr[i - 1] != arr[i]:
            result.append(arr[i - 1])
    result.append(arr[len(arr) - 1])
    return result
