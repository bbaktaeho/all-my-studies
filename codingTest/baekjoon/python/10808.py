alphaList = [0] * 26
a = ord('a')
for c in input(): alphaList[ord(c) - a] += 1
print(*alphaList)