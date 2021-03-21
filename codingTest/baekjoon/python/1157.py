alphaCount = {}
s = input().upper()
for c in s:
    if c not in alphaCount.keys(): alphaCount[c] = 1
    else: alphaCount[c] += 1
result = [key for key, v in alphaCount.items() if max(alphaCount.values()) == v]
print(result[0] if len(result) == 1 else '?')