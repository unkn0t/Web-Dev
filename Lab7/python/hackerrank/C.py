import math

ab = float(input())
bc = float(input())

theta = round(math.degrees(math.asin(ab / math.hypot(ab, bc))))
print(f'{int(theta)}\u00B0')
