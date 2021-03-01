# def solution(participants, completion):
#     participants.sort()
#     completion.sort()
#     for i in range(len(completion)):
#         if completion[i] != participants[i]:
#             return participants[i]
#     return participants[-1]





def solution(arr):
    p1 = [1, 2, 3, 4, 5]
    p2 = [2, 1, 2, 3, 2, 4, 2, 5]
    p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    result = []
    a = b = c = 0
    for i, v in enumerate(arr):
        if v == p1[i % len(p1)]: a += 1
        if v == p2[i % len(p2)]: b += 1
        if v == p3[i % len(p3)]: c += 1
    m = max(a, b, c)
    if m == a: result.append(1)
    if m == b: result.append(2)
    if m == c: result.append(3)
    return result
