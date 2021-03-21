while True:
    s = input()
    if s == '0': break
    if s == s[::-1]: print("yes")
    else: print("no")