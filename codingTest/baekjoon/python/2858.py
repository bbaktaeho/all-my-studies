R, B = map(int, input().split())
for h in range(3, R // 2):
    h_2 = h * 2
    w = (R - h_2) // 2 + 2
    if h * w - R == B: 
        if h >= w: print(h, w) 
        else: print(w, h)
        break