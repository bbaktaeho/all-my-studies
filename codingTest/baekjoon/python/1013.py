import sys

# T = int(sys.stdin.readline())
# for _ in range(T):
#     s = sys.stdin.readline()
#     re.match()
#     l = re.findall("100+", s)
#     print(l)

import re

s = "0110001011001"
pattern1 = re.compile("100+1+")
a = pattern1.findall(s)
pattern2 = re.compile("01")
b = pattern2.findall(s)
# pattern3 = re.compile("(100+|01+)+")
p1 = s
p2 = s
for i in a:
    p1 = p1.replace(i, "*" * len(i))
for i in pattern2.findall(s):
    p2 = p2.replace(i, "*" * len(i))
print(p1, p2)

# print(pattern1.search(s))
# print(pattern2.findall(s))
# print(pattern.match(s))
# print(pattern.search(s))