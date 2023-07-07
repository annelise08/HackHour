class Solution:
    # first solution (basic)
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # iterate through list of numbers
        for i in range(len(nums) - 1):
            # iterate through list of numbers again
            for j in range(i + 1, len(nums)):
                # if two numbers equal sum, return [i, j]
                if nums[i] + nums[j] == target: 
                    return [i, j]
    def twoSumII(self, nums: list[int], target: int) -> list[int]:
         # store seen values in a dictionary
         seen = {}
         # iterate through numbers in list
         for i, el in enumerate(nums):
             # calculate remainder
             remainder = target - el
             # check if remainder exists in seen dictionary
             if remainder in seen:
                 return [seen[remainder], i]
             else: seen[el] = i

print(Solution.twoSum(Solution, [3,2,4], 6)) # [1, 2]
print(Solution.twoSum(Solution, [3,2,3], 6)) # [0, 2]
print(Solution.twoSumII(Solution, [3,2,4], 6)) # [1, 2]
print(Solution.twoSumII(Solution, [3,2,3], 6)) # [0, 2]