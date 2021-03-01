a, b = map(int, input().split())
if a == b:
    print("==")
else:
    print("<" if a < b else ">")