k, m = map(int, input().split(" "))

a = []
for i in range(k):
    size, *arr = list(map(lambda x: x * x, map(int, input().split(" "))))
    a.append(arr)

ans = 0


def combs(idx, base=[]):
    global a, ans

    if idx == len(a):
        res = 0
        for el in base:
            res += el
        ans = max(ans, res % m)
    else:
        for el in a[idx]:
            combs(idx + 1, base + [el])


combs(0)
print(ans)
