N, M = map(int, input().split())
left = 1
right = M
moveCount = 0
for _ in range(int(input())):
    J = int(input())
    if left <= J <= right: continue
    if J < left:
        moveCount += left - J
        left = J
        right = left + M - 1
    if right < J:
        moveCount += J - right
        right = J
        left = right - M + 1
print(moveCount)
