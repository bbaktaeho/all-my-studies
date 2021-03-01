result = 0
arr = []

def dfs(i, total, target):
    global result
    if i == len(arr):
        if total == target: result += 1
        return
    
    dfs(i+1, total + arr[i], target)
    dfs(i+1, total - arr[i], target)

def solution(numbers, target):
    global arr
    if sum(numbers) == target: return 1
    arr = numbers

    dfs(0, 0, target)
    return result
    

