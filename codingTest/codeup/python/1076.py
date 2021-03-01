data = input()
a = ord("a")
s = ""
while True:
    s += chr(a) + " "
    if chr(a) == data:
        print(s)
        break
    a += 1
