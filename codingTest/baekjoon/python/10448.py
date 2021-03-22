tris = []
for i in range(1, 1000):
    n = i*(i+1)/2
    if n > 1000: break
    tris.append(n)
size = len(tris)

def solve(num):
    for i in range(size):
        for j in range(size):
            for k in range(size):
                if (tris[i] + tris[j] + tris[k]) == num:
                    return True
    return False

for _ in range(int(input())):
    print(1 if solve(int(input())) else 0)
