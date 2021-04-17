A, P = input().split()
P = int(P)

sequence = []
while int(A) not in sequence:
    sequence.append(int(A))
    D = 0
    for c in A: D += int(c) ** P
    A = str(D)
    
print(len(sequence[:sequence.index(int(A))]))