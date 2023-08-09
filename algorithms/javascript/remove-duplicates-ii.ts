//  Source: Leetcode #80

/* Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. */

function removeDuplicates(nums: number[]): number {
    // special case
    if (nums.length <= 2) return nums.length;

    // initialize k
    let k = 2;
    // iterate over numbers in array
    for (let i = 2; i < nums.length; i++){
        // if number at k - 1 or k - 2 does not match current number at i
        if (nums[k - 1] !== nums[i] || nums[k - 2] !== nums[i]){
            // number at k becomes number at i
            nums[k] = nums[i];
            // increment k
            k++;
        }
    }
    // return k
    return k
};

console.log(removeDuplicates([1,1,1,2,2,3]))