# n = int(input())

# a, b = 0, 1
# while n > 0:
#     a, b = b, a+b
#     n -= 1

# print(a)


n = int(input())
left, right = 0, 1
for _ in range(n-1):
    left, right = right, left + right
print(right)