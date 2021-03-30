N = int(input())
in_data = list(map(int, input().split()))
st_num = []
st_idx = []
result = ["-1" for _ in range(N)]
F = dict()

for num in in_data:
    try: F[num] += 1
    except: F[num] = 1

for i in range(N):
    cur_num = in_data[i]
    while st_num and F[st_num[-1]] < F[cur_num]:
        result[st_idx.pop()] = str(cur_num)
        st_num.pop()
    st_num.append(cur_num)
    st_idx.append(i)

print(" ".join(result))