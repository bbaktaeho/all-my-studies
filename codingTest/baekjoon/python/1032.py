patternCnt = []
first = ""
N = int(input())
for _ in range(N):
    s = input()
    if not first: first = s
    if not patternCnt : patternCnt = [1] * len(s)
    else:
        for i in range(len(first)):
            if first[i] == s[i]: patternCnt[i] += 1
result = ""
for i in range(len(first)):
    if N == patternCnt[i]: result += first[i]
    else: result += '?'
print(result)