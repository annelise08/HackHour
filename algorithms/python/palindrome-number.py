# Source: Leetcode # 9 

# Given an integer x, return true if x is a 
# palindrome and false otherwise.


# Example 1:

# Input: x = 121
# Output: true
# Explanation: 121 reads as 121 from left to right and from right to left.
# Example 2:

# Input: x = -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: x = 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

class Solution:
    # first solution
    def isPalindrome(self, x: int) -> bool:
        # if number is negative return false
        if x < 0: return False
        x = str(x);
        # initialize two pointers, one to start at beginning of number and other to start at end
        left = 0
        right = len(x) - 1
        # while left pointer is less than right
        while left < right: 
            # check if numbers are the same, if not return false
            if x[left] != x[right]: return False
            else: 
                left += 1
                right -= 1
        # return true
        return True
    # more simple solution- just reverse the string and check if it matches
    def isPalindromeII(self, x: int) -> bool:
        if x < 0: return False
        return str(x) == str(x)[::-1]
    
print(Solution.isPalindrome(Solution, 121)) # true
print(Solution.isPalindrome(Solution, -121)) # false
print(Solution.isPalindromeII(Solution, -121)) # false
print(Solution.isPalindromeII(Solution, 121)) # true