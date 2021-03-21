# from itertools import combinations
# for a in range(6, 101):
#     for triple in combinations(range(2, a), 3):
#         if a**3 == sum(map(lambda x: x**3, triple)):
#             print("Cube = %d, Triple = (%d,%d,%d)" % (a,triple[0], triple[1], triple[2]))

for a in range(6, 101):
    for b in range(2, a-2):
        for c in range(b+1, a-1):
            for d in range(c+1, a):
                if a**3 == b**3 + c**3 + d**3:
                    print("Cube = %d, Triple = (%d,%d,%d)" % (a,b,c,d))