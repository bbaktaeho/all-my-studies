T = int(input())
t = T
while T:
    a, b = map(int, input().split())
    print("Case #{}:".format(t + 1 - T), "%d + %d =" % (a, b), a + b)
    T -= 1
