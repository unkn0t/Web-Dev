n = int(input())
a = list(map(int, input().split(" ")))


def sign(x):
    if x > 0:
        return 1
    elif x < 0:
        return -1
    else:
        return 0


count = 0
for i in range(1, n):
    count += sign(a[i]) == sign(a[i - 1])

if count > 0:
    print("YES")
else:
    print("NO")
