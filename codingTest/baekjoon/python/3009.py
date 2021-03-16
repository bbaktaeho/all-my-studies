# X = []
# Y = []
# for _ in range(3):
#     x, y = map(int, input().split())
#     X.append(x)
#     Y.append(y)
# pointX = ""
# pointY = ""
# for i in range(3):
#     if X.count(X[i]) == 1: pointX = str(X[i])
#     if Y.count(Y[i]) == 1: pointY = str(Y[i])
# print(pointX + " " + pointY)

import sys
input = sys.stdin.readline

X = []
Y = []
for _ in range(3):
    x, y = map(int, input().split())
    if x in X: X.remove(x)
    else: X.append(x)
    if y in Y: Y.remove(y)
    else: Y.append(y)
print(*X, *Y)