// Source: Leetcode #14

/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */


// Time complexity: O(n*m) where n is the length of the shortest word and m is the length of the array strs
// Space complexity: O(n) where n is the length of the first word
var longestCommonPrefix = function(strs) {
    // initialize a prefix to an empty string
    let prefix = ''
    // iterate through letters in first word
    for (let i = 0; i < strs[0].length; i++){
        // initialize temp to prefix + current letter
        let temp = prefix + strs[0][i]
        // iterate through remaining words
        for (let j = 1; j < strs.length; j++){
            // if first chars don't match, return prefix
            if (strs[j].slice(0, temp.length) !== temp) return prefix;
        }
        // add current letter to prefix
        prefix = temp;
    }
    // return prefix
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))