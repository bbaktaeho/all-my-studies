def zFunc(n, x, y):
    global cnt
    if n == 2:
        if x == r and y == c:
            print(cnt)
            return
        cnt += 1
        if x == r and y+1 == c:
            print(cnt)
            return
        cnt += 1
        if x+1 == r and y == c:
            print(cnt)
            return
        cnt += 1
        if x+1 == r and y+1 == c:
            print(cnt)
            return
        cnt += 1
        return
    zFunc(n / 2, x, y)
    zFunc(n / 2, x, y + n / 2)
    zFunc(n / 2, x + n / 2, y)
    zFunc(n / 2, x + n / 2, y + n / 2)

def zFunc2(size, x, y):
    if size == 1: 
        return 0
    size //= 2
    for i in range(2):
        for j in range(2):
            if x < size * (i+1) and y < size * (j+1):
                return (i*2+j) * size*size + zFunc2(size, x - size * i, y - size * j)

n, r, c = map(int, input().split())
cnt = 0
# zFunc(2**n, 0, 0)
print(zFunc2(2**n, r, c))
