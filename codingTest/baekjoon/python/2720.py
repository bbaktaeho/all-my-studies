for i in range(int(input())):
    result = ""
    C = int(input())
    result += str(C // 25)
    C %= 25
    result += " " + str(C // 10)
    C %= 10
    result += " " + str(C // 5)
    C %= 5
    result += " " + str(C // 1)
    print(result)