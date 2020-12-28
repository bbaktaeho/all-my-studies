# 재귀 호출의 일반적인 형태

def multiple(data):
    if data <= 1:
        return data
    return data * multiple(data-1)
print(multiple(10))

def sumList(list):
    if len(list) == 1:
        return list[0]
    return list[0] + sumList(list[1:])
print(sumList([1,2,3,4,5,6,7,8,9,10]))

# def factorial(n):
#     fac = 1;
#     for f in range(2, n+1):
#         fac = fac * f;
#     return fac;

def factorial(n):
    if n > 1: return n * factorial(n-1);
    else: return 1
print(factorial(4))

# def isPalindrome(s):
#     length = len(s)
#     if length % 2 == 0: return False
#     for i in range(0, int(length/2)):
#         if s[i] != s[length-i-1]: return False
#     return True

def isPalindrome(s):
    if len(s) == 1: return True
    if s[0] == s[-1]: return isPalindrome(s[1:-1])
    else: return False
print(isPalindrome("abcb"))

def solution1(n):
    print(n)
    if n == 1: return n
    elif n % 2 == 1: return solution1(3*n+1)
    else: return solution1(n/2)
solution1(3)

def solution2(n):
    if n == 1: return 1
    elif n == 2: return 2
    elif n == 3: return 4
    else: return solution2(n-3) + solution2(n-2) + solution2(n-1)
print(solution2(5))