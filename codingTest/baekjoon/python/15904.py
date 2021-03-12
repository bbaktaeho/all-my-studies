import re
s = "".join(re.findall("U|C|P", input()))
ucpc = ['U','C','P','C']
for i in range(len(s)):
    if len(ucpc) == 0: break
    if s[i] == ucpc[0]: ucpc.pop(0)
print("I love UCPC" if len(ucpc) == 0 else "I hate UCPC")