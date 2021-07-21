import sys
sys.stdin = open("input.txt")

N = input()
nums = list(map(int, input().split()))
v = int(input())

answer = 0

for num in nums:
    if num == v:
        answer += 1

print(answer)