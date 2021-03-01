def solution(arr, divisor):
    result = list(sorted(filter(lambda x: x % divisor == 0, arr)))
    return result if len(result) else [-1]