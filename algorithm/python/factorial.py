def factorial1(n):
    fac = 1;
    for f in range(2, n+1):
        fac = fac * f;
    return fac;

def factorial2(n):
    if n > 1: return n * factorial2(n-1);
    else: return 1

print(factorial1(4), factorial2(4))