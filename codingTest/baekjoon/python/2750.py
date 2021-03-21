heap = []
for _ in range(int(input())):
    heap.append(int(input()))
print(*sorted(heap), sep="\n")