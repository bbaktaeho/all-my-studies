c1_money = [500, 300, 200, 50, 30, 10]
c1_people = [1, 2, 3, 4, 5, 6]
c2_money = [512, 256, 128, 64, 32]
c2_people = [1, 2, 4, 8, 16]

for _ in range(int(input())):
    a, b = map(int, input().split())
    result_a = 0
    for i in range(len(c1_people)):
        a -= c1_people[i]
        if a <= 0: 
            result_a = i
            break
    result_b = 0
    for i in range(len(c2_people)):
        b -= c2_people[i]
        if b <= 0:
            result_b = i
            break
    print((c1_money[result_a] + c2_money[result_b]) * 10000)