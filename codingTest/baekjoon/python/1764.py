import sys; input = sys.stdin.readline

DBJ = dict()
N, M = map(int, input().split())
for _ in range(N+M):
    name = input().rstrip()
    try: DBJ[name] += 1
    except: DBJ[name] = 0

result = sorted(map(lambda x: x[0], filter(lambda x: x[1] == 1, list(DBJ.items()))))
print(len(result), *result, sep='\n')