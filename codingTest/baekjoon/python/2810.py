N = int(input())
cups = len(input().replace('LL', 'S')) + 1
print(N if cups > N else cups)