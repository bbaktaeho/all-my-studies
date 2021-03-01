# a, b, v = map(int, input().split())
# if a == v:
#     print(1)
# else:
#     key = a - b
#     day = v // key

#     if key == 1:
#         print(day - b)
#     elif day == 1:
#         print(day + 1)
#     elif (day - 1) * key + a == v:
#         if v % key == 0:
#             print(day)
#         else:
#             print(day - 1)
#     else:
#         if (v / key - day) > 0.5:
#             print(day + 1)
#         else:
#             print(day)

a, b, v = map(int, input().split())
print((v - b - 1) // (a - b) + 1)
