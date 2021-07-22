import sys
sys.stdin = open("input.txt")

T = int(input())

for i in range(T):
  before, after = input().split(' ')

  if (len(before) != len(after)):
    print("Impossible")
    continue

  before_alpha = [0] * 26
  after_alpha = [0] * 26

  for i in range(len(before)):
    before_alpha[ord(before[i])-97] += 1
    after_alpha[ord(after[i])-97] += 1
  
  if before_alpha == after_alpha:
    print("Possible")
  else:
    print("Impossible")
