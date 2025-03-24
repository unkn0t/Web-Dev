n = int(input())
a = list(map(int, input().split(" ")))

count = 0
for i in range(1, n):
    count += a[i] > a[i - 1]

print(count)
