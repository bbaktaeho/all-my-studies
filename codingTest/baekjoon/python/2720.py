for i in range(int(input())):
    result = ""
    C = int(input())
    result += str(C // 25)
    C -= (C // 25 * 25)
    result += " " + str(C // 10)
    C -= (C // 10 * 10)
    result += " " + str(C // 5)
    C -= (C // 5 * 5)
    result += " " + str(C // 1)
    print(result)