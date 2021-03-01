data = list(map(lambda x: "even" if int(x) % 2 == 0 else "odd", input().split()))
for i in data:
    print(i)
