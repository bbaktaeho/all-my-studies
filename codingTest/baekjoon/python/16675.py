ML, MR, TL, TR = ("SRP".index(i) for i in input().split())

if ML == MR and (ML+1) % 3 in [TL, TR]:
    print("TK")
elif TL == TR and (TL+1) % 3 in [ML, MR]:
    print("MS")
else:
    print("?")