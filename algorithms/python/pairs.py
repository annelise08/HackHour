#
# Complete the 'pairs' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER k
#  2. INTEGER_ARRAY arr
#

def pairs(k, arr):
    # Write your code here
    # create an empty set
    temp = {}
    pairs = 0
    # iterate through array elements
    for num in arr:
        # if set includes current - k, increment pairs
        if num + k in temp:
            pairs += 1
        if num - k in temp:
            pairs += 1
        # add current to set
        temp[num] = True
    return pairs