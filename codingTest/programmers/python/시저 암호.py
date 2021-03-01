def solution(s, n):
    encrypt = ""
    for c in s:
        c = ord(c)
        plus = c + n
        if c == ord(" "):
            encrypt += " "
        elif 97 <= c and c <= 122:
            if 122 < plus:
                encrypt += chr(plus - 123 + 97)
            else:
                encrypt += chr(plus)
        else:
            if 90 < plus:
                encrypt += chr(plus - 91 + 65)
            else:
                encrypt += chr(plus)
    return encrypt


# 테스트 13 〉	통과 (2.15ms, 10.3MB)