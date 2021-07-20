def insert(idx, num, lst, len):
  # lst.insert(idx, num)
  # return lst
  for i in range(len-1, idx):
    lst[i] = lst[i-1]
  lst[idx] = num
  return lst

def erase(idx, lst, len):
  # del lst[idx]
  # return lst
  for i in range(idx, len-1):
    lst[i] = lst[i+1]
  return lst[:len-1]

def print_lst(lst):
  for i in lst:
    print(i, end=" ")


lst = [10, 50, 40, 30, 70, 20]
lst_len = 6

def insert_test():
  inserted_lst = insert(3, 60, lst, lst_len)
  print_lst(inserted_lst)

def erase_test():
  erased_lst = erase(4, lst, lst_len)
  print_lst(erased_lst)

insert_test()
print()
erase_test()
