n = int(input())
result = -1
tmp = n
cnt = 0
while result != n:
    mok = tmp // 10
    mod = tmp % 10
    result = mod * 10 + (mok + mod) % 10
    tmp = result
    cnt += 1
print(cnt)
