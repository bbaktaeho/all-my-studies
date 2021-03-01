N, answer = int(input()), input()
total = 0
bonus = 0
for i, v in enumerate(answer):
    if v == "O":
        total += (i+1) + bonus
        bonus += 1
    else:
        bonus = 0
print(total)