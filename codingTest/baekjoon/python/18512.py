X, Y, P1, P2 = map(int, input().split())
over = False
# if P1 == P2:
#     P1 += X
#     P2 += Y
#     if P1 > 100 or P2 > 100: over = True
while P1 != P2:
    if P1 > 100 or P2 > 100:
        over = True
        break
    if P1 < P2: P1 += X
    elif P1 > P2: P2 += Y
print(P1 if not over else -1)