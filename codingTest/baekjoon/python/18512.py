X, Y, P1, P2 = map(int, input().split())
cnt = 0
while cnt < 100:
    if P1 == P2: break
    elif P1 > P2: P2 += Y
    else: P1 += X
    cnt += 1
print(-1 if cnt >= 100 else P1)