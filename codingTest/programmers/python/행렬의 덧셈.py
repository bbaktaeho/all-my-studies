def solution(arr1, arr2):
    result = []
    for i in range(len(arr1)):
        row = []
        for j in range(len(arr1[i])):
            row.append(arr1[i][j] + arr2[i][j])
        result.append(row)
    return result