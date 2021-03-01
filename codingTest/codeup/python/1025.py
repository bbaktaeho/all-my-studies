num = input()
l = len(num)-1
for i in num:
    print("[%s]" % (i+"0"*l))
    l -= 1
    