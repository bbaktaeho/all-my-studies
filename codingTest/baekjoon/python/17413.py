# s = input()
# result = []
# word = ''
# tag = ""
# i = 0
# while i < len(s):
#     if s[i] == '<':
#         while s[i] != '>':
#             tag += s[i]
#             i += 1
#         tag += s[i]
#         result.append(tag)
#         i+=1
#         tag = ""
#     else:
#         while (i < len(s)) and (s[i] != " ") and (s[i] != '<'):
#             word += s[i]
#             i += 1
#         result.append(word[::-1])
#         if i < len(s) and s[i] == " ":
#             i += 1
#             result.append(' ')
#         word = ""
# for i in result:
#     print(i, end="")


s = input()
temp, result, ck = "", "", False

for i in s:
    if i == ' ':
        if ck:
            result += ' '
        else:
            result += temp[::-1] + " "
            temp = ""
        pass
    elif i == "<":
        ck = True
        result += temp[::-1] + "<"
        temp = ""
        pass
    elif i == '>':
        ck = False
        result += ">"
        pass
    else:
        if ck:
            result += i
        else:
            temp += i

result += temp[::-1]
print(result)