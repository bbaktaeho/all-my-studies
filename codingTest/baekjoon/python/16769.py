capacity, milk = [0, 0, 0], [0, 0, 0]
for i in range(3):
    capacity[i], milk[i] = map(int, input().split())

for i in range(100):
    cur = i % 3
    next = (cur + 1) % 3
    mNext = milk[next]
    milk[next] = min(capacity[next], milk[next] + milk[cur])
    milk[cur] = max(milk[cur] - (capacity[next] - mNext), 0)

for i in milk:
    print(i)
