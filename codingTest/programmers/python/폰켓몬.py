def solution(nums):
    size = len(nums)
    deDuplicationSize = len(set(nums))
    if deDuplicationSize > size // 2: return size // 2
    else: return deDuplicationSize