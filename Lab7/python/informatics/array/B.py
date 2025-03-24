n = int(input())
a = list(map(int, input().split(" ")))
out = map(str, filter(lambda x: x % 2 == 0, a))
print(" ".join(out))
