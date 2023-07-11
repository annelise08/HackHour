# Source: Leetcode
# Write an algorithm to determine if a number n is happy.

# A happy number is a number defined by the following process:

# Starting with any positive integer, replace the number by the sum of the squares of its digits.
# Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
# Those numbers for which this process ends in 1 are happy.
# Return true if n is a happy number, and false if not.

 

# Example 1:

# Input: n = 19
# Output: true
# Explanation:
# 12 + 92 = 82
# 82 + 22 = 68
# 62 + 82 = 100
# 12 + 02 + 02 = 1
# Example 2:

# Input: n = 2
# Output: false


class Solution:
    def isHappy(self, n: int) -> bool:
       # initialize list to store seen values
        seen = []

        # repeat process if n > 0
        while (n > 0):
            # initialize total to store sum of squares
            total = 0
            while (n > 0):
                i = n % 10
                total += i * i
                n = n // 10

            # check if we've already seen total
            if (total == 1): return True
            if (total in seen):
                return False
            else: 
                seen.append(total)
            n = total