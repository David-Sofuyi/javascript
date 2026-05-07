#  write a function that prints out the most occuring number 
#  input {2,1,2,5,2,4};
#  output{2};

#  input {3,4,3,4,1,5};
#  output{3,4};

#  from collections import Counter

#  def print_most_occurring(nums):
#      if not nums:
#          print("{}")
#          return
    
#      counts = Counter(nums)
#      max_count = max(counts.values())
    
  
#      result = [num for num, count in counts.items() if count == max_count]
#      result.sort() 
    
#      print("{" + ",".join(map(str, result)) + "}")

#  nums = ([2, 1, 2, 5, 2, 4])

#  print_most_occurring(nums)  
#  print_most_occurring([3, 4, 3, 4, 1, 5])

# def print_most_occurring(nums):
#     if not nums:
#         print("{}")
#         return

# def manual_counter(arr):
#     counts = {}
#     for num in arr:
#         if num in counts:
#             counts[num] += 1
#         else:
#             counts[num] = 1
#     return counts
    
#     result = [num for num, count in counts.items() if count == max_count]
#     result.sort() 
    
#     print("{" + ",".join(map(str, result)) + "}")

# nums = [2, 1, 2, 5, 2, 4]
# print(manual_counter(nums)) 

#  nums = ([2, 1, 2, 5, 2, 4])

#  print_most_occurring(nums)  
#  print_most_occurring([3, 4, 3, 4, 1, 5])


def manual_counter(arr):
    counts = {}
    for num in arr:
        counts[num] = counts.get(num, 0) + 1
    return counts

def print_most_occurring(nums):
    if not nums:
        print("{}")
        return

    counts = manual_counter(nums)
    max_count = max(counts.values())

    result = [num for num, count in counts.items() if count == max_count]
    result.sort()

    print("{" + ",".join(map(str, result)) + "}")

print_most_occurring([3, 4, 3, 4, 1, 5]) 

def reverse_word(word):
    return word[::-1]
    
    
    
def convert_minutes(minutes):
    seconds = minutes * 60
    hours = minutes / 60
    
    print(f"{minutes} minutes = {seconds} seconds = {hours} hours")
    
    # return as a tuple if you want to use the values later
    return seconds, hours

# Examples
convert_minutes(90)   # 90 minutes = 5400 seconds = 1.5 hours
convert_minutes(120)  # 120 minutes = 7200 seconds = 2.0 hours
convert_minutes(45)   # 45 minutes = 2700 seconds = 0.75 hours
