import sys
sys.stdin = open("input.txt")

import math

N = input().replace('9', '6')

need_number = [0] * 9

for i in N:
  need_number[int(i)] += 1
need_number[6] = math.ceil(need_number[6] / 2)

print(max(need_number))

