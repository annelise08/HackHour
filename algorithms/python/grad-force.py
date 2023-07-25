"""""""""
Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.
"""

# example
# Input: nums = [1,2,3,1]
# Output: true

class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        # initialize temp list
        temp = []
        # iterate through input list
        for el in nums:
            # check if temp list includes current element
            if el in temp: return True
            # if it does, return true
            # if it does not, add current element to temp list
            else: temp.append(el)
        # return False
        return False
    
print(Solution.containsDuplicate(Solution, [11, -1, 1, 1, 2,3,1])) # true
print(f'{Solution.containsDuplicate(Solution, [1,2,3])}') # false
