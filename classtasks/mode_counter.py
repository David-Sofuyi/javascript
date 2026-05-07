# write a function that counts the amount of the most occuring number in an array

def mode_counter(arr):
    counts = {}
    for item in arr:
        counts[item] = counts.get(item, 0) + 1

    return max(counts.values())


input1 = [1,2,2,2,3]
input2 = [1,5,5,6,4]
print(count_most_occurring(numbers))
