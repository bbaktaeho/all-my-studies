s = input()
a = ord('A')
result = 0
for alpha in s:
    if alpha in "PQRS": result += 8 
    elif alpha in "TUV": result += 9
    elif alpha in "WXYZ": result += 10 
    else: result += ((ord(alpha) - a) // 3 + 3)
print(result)