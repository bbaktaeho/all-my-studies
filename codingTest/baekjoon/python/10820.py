while True:
    try:
        discriminator = [0, 0, 0, 0]
        for c in input():
            if ord('A') <= ord(c) <= ord('Z'): discriminator[1] += 1
            elif ord('a') <= ord(c) <= ord('z'): discriminator[0] += 1
            elif ord('0') <= ord(c) <= ord('9'): discriminator[2] += 1
            elif " " == c : discriminator[3] += 1
        print(*discriminator)
    except:
        exit()