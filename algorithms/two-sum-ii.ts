// Source: Leetcode #167

/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

// first attempt
// time complexity: O(n^2)
// space complexity: O(1)
function twoSum(numbers: number[], target: number): number[] {
    // initialize first pointer
    let i : number = 0;
    // while pointer is less than length of the array and element is less than target
    while (i < numbers.length - 1 && numbers[i] <= Math.abs(target)){
        // initialize second pointer to next element
        let j: number = i + 1;
        // find compliment
        let comp: number = target - numbers[i];
        // while second pointer is less than length of the array
        while (j < numbers.length){
            // if element is equal to compliment, return array of values [i, j]
            if (numbers[j] === comp) return [i + 1, j + 1];
            // if element is greater than compliment, break
            if (numbers[j] > comp) break;
            // if element is less than compliment, increment pointer
            if (numbers[j] < comp) j++;
        }
        // increment pointer
        i++;
    }
    return [0, 0]
};

// console.log(twoSum([2,3,4], 6))
// console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([-1, -1], -2))

// second attempt properly using two pointers
function twoSumII (numbers: number[], target: number): number[]{
    // initialize two pointers
    let left: number = 0;
    let right: number = numbers.length - 1;
    // while second pointer is greater than first
    while (left < right){
        // if sum equals target, return array of indexes [i, j] for 1-indexed array
        if (numbers[left] + numbers[right] === target) return [left + 1, right + 1];
        // if sum is greater than target, decrement right pointer
        if (numbers[left] + numbers[right] > target) right--;
        // if sum is less than target, increment left pointer
        if (numbers[left] + numbers[right] < target) left++;
    }
    // return [0, 0] if no sum matching target is found
    return [0, 0]
}

console.log(twoSumII([2,3,4], 6))
console.log(twoSumII([2,7,11,15], 9))
console.log(twoSumII([-1, -1], -2))