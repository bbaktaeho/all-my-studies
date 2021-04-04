C, R = map(int, input().split())
K = int(input())

if C * R < K: print(0)
else:
    cnt = 0
    rotation = 0
    while True:
        pre_K = K
        if rotation % 2 == 0: 
            K -= R - cnt
            cnt += 1
        else: K -= C - cnt

        if K < 0: 
            K = pre_K
            break
        rotation += 1
        if K == 0: break

    result = [1, 0]
    change = False
    for i in range(1, rotation+1):
        if i % 2 != 0: 
            if change: result[1] -= R
            else: result[1] += R
            R -= 1
        else:
            C -= 1
            if change: result[0] -= C
            else: result[0] += C
            change = not change

    if change:
        if rotation % 2 == 0: result[1] -= K
        else: result[0] -= K
    else:
        if rotation % 2 == 0: result[1] += K
        else: result[0] += K

    print(*result)