class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # iterate through list of numbers
        for i in range(len(nums) - 1):
            # iterate through list of numbers again
            for j in range(i + 1, len(nums)):
                # if two numbers equal sum, return [i, j]
                if nums[i] + nums[j] == target: 
                    return [i, j]