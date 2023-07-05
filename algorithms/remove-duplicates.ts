// Source: Leetcode #26

/* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

function removeDuplicates(nums: number[]): number {
    if (!nums.length) return 0;
    // keep track of current index and curr value
    let index: number = 1;
    let curr = nums[0];
    // iterate through array of numbers
    for (let i = 1; i < nums.length; i++){
        // if current number is not the same as curr, element at current index becomes i
        if (curr !== nums[i]){
            nums[index] = nums[i];
            curr = nums[i];
            index++;
        }
    }
    // return current index
    return index;
};

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([1, 1, 2, 2, 3]))
console.log(removeDuplicates([]))