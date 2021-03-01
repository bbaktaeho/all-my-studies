h = input()
hexNum = int(h, 16)
for i in range(1, 16):
    print("%s*%s=%s" % (h, hex(i)[2:].upper(), hex(i * hexNum)[2:].upper()))
