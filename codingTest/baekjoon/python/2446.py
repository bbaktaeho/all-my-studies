N = 2*int(input())-1
repeat = N
interval = 0
while repeat > 0:
    print(" " * interval + "*" * repeat)
    repeat -= 2
    interval += 1
repeat = 3
interval -= 2
while repeat <= N:
    print(" " * interval + "*" * repeat)
    repeat += 2
    interval -= 1

# 다른 답..
num = int(input())
for n in range(-num+1,num):
	print(' '*(num-abs(n)-1) + '*'*(2*abs(n)+1))