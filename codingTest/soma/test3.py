def check(current):
    global total_distance
    total_distance += 1
    if visited[current]: return
    if total_count == m:
        return
    if current in peanuts:
        pass
    else:
        check(current+1)
        check(current-1)
n, m, e = map(int, input().split())
peanuts = []
visited = {}
for p in map(int, input().split()):
    peanuts.append(p)
    visited[p] = False
peanuts = set(peanuts)
total_distance = 0
total_count = 0
check(e)
