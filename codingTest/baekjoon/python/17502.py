N = int(input())
s = input()
if N == s.count('?'): print("a"*N)
else:
    s = list(s)
    for i in range(N):
        if s[i] == '?': 
            if s[N-1-i] == '?':
                s[i], s[N-1-i] = 'a', 'a'
            else: s[i] = s[N-1-i]
    print("".join(s))