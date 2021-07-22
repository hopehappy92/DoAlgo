import sys
sys.stdin = open("input.txt")

A = int(input())
B = int(input())
C = int(input())

multiple = str(A * B * C)

for i in range(10):
  print(multiple.count(str(i)))