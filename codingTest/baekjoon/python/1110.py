# n = int(input())
# result = -1
# tmp = n
# cnt = 0
# while result != n:
#     mok = tmp // 10
#     mod = tmp % 10
#     result = mod * 10 + (mok + mod) % 10
#     tmp = result
#     cnt += 1
# print(cnt)

n = int(input())
originNum = n
cnt = 0
while True:
    first, second = n // 10, n % 10
    n = second * 10 + (first + second) % 10
    cnt += 1
    if n == originNum: break
print(cnt)