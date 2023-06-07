// Source: Leetcode #209
/* Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0 */

function minSubArrayLen(target: number, nums: number[]): number {
    // initialize left and right pointers
    let left = 0;
    let right = 0;
    // initialize sum
    let sum = 0;
    // initialize min length
    let minLength = 0

    // iterate through elements
    while (right < nums.length){
        // add current element
        sum += nums[right];
        // check if sum is greater than target
        while (sum >= target && left <= right){
            // update length
            if (minLength === 0 || right - left + 1 < minLength) minLength = right - left + 1;
            // decrease window size by 1
            sum -= nums[left];
            left++;
        }
        right++;
    }
    return minLength;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1]))