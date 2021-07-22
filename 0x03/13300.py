import sys
sys.stdin = open("input.txt")

rooms = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
room_count = 0

N, K = map(int, input().split(' '))
for i in range(N):
  S, Y = map(int, input().split(' '))
  rooms[Y-1][S] += 1
  if rooms[Y-1][S] >= K:
    room_count += 1
    rooms[Y-1][S] -= K 
    
for room in rooms:
  for students in room:
    if students != 0:
      room_count +=1

print(room_count)  