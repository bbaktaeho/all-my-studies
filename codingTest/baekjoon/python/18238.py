start = ord('A')
time = 0
for c in input():
    left =  start - ord(c)
    right = ord(c) - start
    start = ord(c)
    if left < 0: left += 26
    if right < 0: right += 26
    time += min(left, right)
print(time)