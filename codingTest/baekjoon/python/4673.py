selfNumList = [True] * 10001

def d(n):
    origin = n
    while n:
        origin += n % 10
        n //= 10
    if origin <= 10000: selfNumList[origin] = False
    return origin

for i in range(1, 10001): d(i)
for i in range(1, 10001): 
    if selfNumList[i]: print(i)
