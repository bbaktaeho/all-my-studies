a, b, c = int(input()), int(input()), int(input())
s = str(a * b * c)

for i in range(10):
    print(s.count(str(i)))