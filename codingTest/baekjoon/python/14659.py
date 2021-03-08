input()    
arr = list(map(int, input().split()))
result = 0
for i in range(len(arr)):
    count = 0
    for j in range(i+1, len(arr)):
        if arr[i] > arr[j]: count += 1
        else: break
    result = max(result, count)
    if result >= len(arr) - i - 1: break
print(result)

# import sys
# input = sys.stdin.readline

# N = int(input())
# arr = list(map(int, input().split()))
# arr.append(100001)
# ans = 0
# H, cnt = 0, 0
# for h in arr:
#     if h > H:
#         ans = max(cnt, ans)
#         cnt = 0
#         H = h
#     else:
#         cnt += 1
# print(ans)

# n=int(input())
# l=list(map(int,input().split()))
# a,b,m,M=0,1,0,0
# while b<n:
#     if l[a]>l[b]:
#         m+=1
#         b+=1
#     else:
#         M,m=max(m,M),0
#         a,b=b,b+1
# print(max(M,m))