import sys

rl = sys.stdin.readline


def showMeTheMoney(l):
    s = set(l)
    if len(s) == 1:
        return 50000 + (l[0] * 5000)
    ls = sorted(l)
    if len(s) == 2:
        if ls[1] == ls[2]:
            return 10000 + (ls[1] * 1000)
        else:
            return 2000 + (ls[0] * 500) + (ls[2] * 500)
    if len(s) == 3:
        for i in range(len(ls)):
            if ls[i] == ls[i + 1]:
                return 1000 + (ls[i] * 100)
    return ls[3] * 100


arr = []
for _ in range(int(rl())):
    arr.append(list(map(int, rl().split())))

result = []
for l in arr:
    result.append(showMeTheMoney(l))
print(result)
print(max(result))