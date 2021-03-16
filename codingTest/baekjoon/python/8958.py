T = int(input())
for _ in range(T):
    score = 1
    total = 0
    ox = input() # str
    for q in ox:
        if q == 'X': score = 1
        if q == 'O':
            total += score
            score += 1
    print(total)

