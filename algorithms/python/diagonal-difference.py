# Source: HackerRank
# Given a square matrix, calculate the absolute difference between the sums of its diagonals.

# For example, the square matrix  is shown below:

# 1 2 3
# 4 5 6
# 9 8 9  
# The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is |15 - 17| = 2.

# Function description

# Complete the  function in the editor below.

# diagonalDifference takes the following parameter:

# int arr[n][m]: an array of integers
# Return

# int: the absolute diagonal difference

def diagonalDifference(arr):
    # Write your code here
    # initialize diagonal 1 and 2 sums
    diagonal1 = 0
    diagonal2 = 0
    # iterate through arr
    for i, innerArr in enumerate(arr):
        # add number at index i to diagonal 1 sum
        diagonal1 += innerArr[i]
        # add number at index array length - i - 1 to diagonal 2 sum
        diagonal2 += innerArr[len(arr) - i - 1]
    # find absolute value of difference between two sums
    return abs(diagonal1 - diagonal2)