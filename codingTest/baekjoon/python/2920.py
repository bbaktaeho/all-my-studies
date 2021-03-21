oc = list(map(int, input().split()))
ac, dc = True, True
for i in range(len(oc) - 1):
    if oc[i] < oc[i+1]: dc = False
    elif oc[i] > oc[i+1]: ac = False
if ac: print("ascending")
elif dc: print("descending")
else: print("mixed")