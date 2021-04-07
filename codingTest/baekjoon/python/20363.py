X, Y = map(int, input().split())
temperature, moisture = 0, 0
total = 0

if X > Y:
    temperature = 1
    total += X
else:
    moisture = 1
    total += Y

if temperature == 0: total += X // 10 * 11 + X % 10
else: total += Y // 10 * 11 + Y % 10
print(total)