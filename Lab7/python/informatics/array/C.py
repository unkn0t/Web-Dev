n = int(input())
a = list(map(int, input().split(" ")))
out = len(list(filter(lambda x: x > 0, a)))
print(out)
