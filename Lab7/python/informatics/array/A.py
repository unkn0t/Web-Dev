n = int(input())
a = list(map(int, input().split(" ")))
out = [str(a[i]) for i in range(0, n, 2)]
print(" ".join(out))
