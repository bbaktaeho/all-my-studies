fix, cost, price = map(int, input().split())
if cost >= price:
    print(-1)
else:
    print(fix // (price - cost) + 1)
