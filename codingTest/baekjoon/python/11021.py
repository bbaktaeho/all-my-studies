T = int(input())
t = T
while T:
    print("Case #{}:".format(t + 1 - T), sum(map(int, input().split())))
    T -= 1
