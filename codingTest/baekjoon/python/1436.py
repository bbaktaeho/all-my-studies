def f(num):
    while num >= 666:
        if num % 1000 == 666:
            return True
        num //= 10
    return False

n = int(input())

i = 666
cnt = 1
while cnt < n:
    i+=1
    if f(i):
        cnt += 1
print(i)