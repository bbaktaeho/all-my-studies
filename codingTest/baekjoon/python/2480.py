# 1. 모두 같음 -> 10000 + 눈 * 1000
# 2. 2개만 같음 -> 1000 + 눈 * 100
# 3. 모두 다름 -> 가장 큰 눈 * 100
a, b, c = map(int, input().split())
if a == b == c:
    print(10000 + (a * 1000))
elif a == b or a == c:
    print(1000 + (a * 100))
elif b == c:
    print(1000 + (b * 100))
else:
    print(max(a, b, c) * 100)

# set 사용하기
# l = sorted(list(map(int, input().split())))
# s = set(l)
# if len(s) == 1:
#     print(10000 + (l[0] * 1000))
# elif len(s) == 2:
#     print(1000 + (l[1] * 100))
# else:
#     print(l[2] * 100)