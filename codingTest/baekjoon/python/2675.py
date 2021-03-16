for _ in range(int(input())):
    R, S = input().split()
    R = int(R)
    result = ""
    for s in S: result += s * R
    print(result)