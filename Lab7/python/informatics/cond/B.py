year = int(input())

is_leap = year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)

if is_leap:
    print("YES")
else:
    print("NO")
