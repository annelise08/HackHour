// Source: Leetcode # 169

/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

function majorityElement(nums: number[]): number {
    // create an object to store values and counts
    const counts: any = {};
    // iterate through array
    for (const num of nums){
        // if element exists in the array, increment count
        // otherwise, add element to object and set count to 1
        num.toString() in counts ? counts[num]++ : counts[num] = 1;
        // if element's count is greater than length / 2, return element
        if (counts[num] > nums.length / 2) return num;
    }
    return 0
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))
