# Source: Leetcode
# Given a string s, find the length of the longest 
# substring
#  without repeating characters.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 1: return 1
        # initialize max length
        max = 0
        # initialize two pointers
        left = 0
        right = 0
        # while second pointer is less than length of string
        while right < len(s) - 1:
            # slice string
            curr = s[left:right + 1]
            # if string doesn't include next letter, increment right pointer
            if s[right + 1] not in curr:
                right += 1
            # otherwise, increment left pointer
            else: left += 1
            # if new string length is greater than max length, max becomes current length
            if right - left + 1 > max: max = right - left + 1
        # return max
        return max