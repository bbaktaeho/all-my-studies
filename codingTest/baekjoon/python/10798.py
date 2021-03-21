words = [input() for _ in range(5)]
maxLen = len(max(key=len, *words))
result = ""
for j in range(maxLen):
    for i in range(5):
        if len(words[i]) <= j: continue
        result += words[i][j]
print(result)