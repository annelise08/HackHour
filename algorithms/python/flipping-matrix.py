# Source: HackerRank

# Flipping the matrix

# Given a 2n x 2n matrix of integers where you can reverse any of the rows or columns any number of times, find the maximum sum of the n x n upper left quadrant
#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the 'flippingMatrix' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY matrix as parameter.
#

def flippingMatrix(matrix):
    # Write your code here
    # initialize n
    n = len(matrix)
    # initialize sum
    s = 0
    # iterate through rows
    for i in range(n//2):
        # iterate through columns
        for j in range(n//2):
            # find max of 4 possible numbers
            s += max(matrix[i][j], matrix[i][n - j - 1], matrix[n - i - 1][j], matrix[n - i - 1][n - j - 1])
    # return sum
    return s