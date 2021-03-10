coins = [25, 10, 5, 1]
for _ in range(int(input())):
    result = ""
    C = int(input())
    for coin in coins:
        result += str(C // coin) + " "
        C %= coin
    print(result)