cnt = 0
for i in range(8):
    for j, c in enumerate(input()):
        if (i+j) % 2 == 0 and c == "F": cnt += 1
print(cnt)