def solution(arr):
    one = [1, 2, 3, 4, 5]
    two = [2, 1, 2, 3, 2, 4, 2, 5]
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    result = []
    a = b = c = 0
    for i, v in enumerate(arr):
        if v == one[i % 5]:
            a += 1
        if v == two[i % 8]:
            b += 1
        if v == three[i % 10]:
            c += 1
    m = max(a, b, c)
    if m == a:
        result.append(1)
    if m == b:
        result.append(2)
    if m == c:
        result.append(3)
    return result

print(solution([1,3,2,4,2]))