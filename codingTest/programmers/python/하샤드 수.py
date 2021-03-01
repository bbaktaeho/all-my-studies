def solution(x):
    origin = x
    s = 0
    while x != 0:
        print(x, s)
        s += x % 10
        x //= 10
    return False if origin % s else True