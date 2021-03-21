from itertools import combinations

def solution(n, m):
    cnt = 0
    for pair in combinations(range(1, n), 2):
        calc = (pair[0]**2 + pair[1]**2 + m) / (pair[0] * pair[1])
        if calc == int(calc): cnt += 1
    return cnt

for _ in range(int(input())):
    n, m = map(int, input().split())
    print(solution(n, m))
