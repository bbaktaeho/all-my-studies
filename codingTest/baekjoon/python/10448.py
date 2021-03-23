# tris = []
# for i in range(1, 1000):
#     n = i*(i+1)/2
#     if n > 1000: break
#     tris.append(n)
# size = len(tris)

# def solve(num):
#     for i in range(size):
#         for j in range(size):
#             for k in range(size):
#                 if (tris[i] + tris[j] + tris[k]) == num:
#                     return True
#     return False

# for _ in range(int(input())):
#     print(1 if solve(int(input())) else 0)

def solve(n, l):
    for i in range(l):
        for j in range(l):
            for k in range(l):
                if tri[i] + tri[j] + tri[k] == n:
                    return 1
    return 0

tri = []
for i in range(1, 1001): 
    t = i * (i+1) / 2
    if t > 1000: break
    tri.append(t)
for _ in range(int(input())):
    K = int(input())
    print(solve(K, len(tri)))
                    