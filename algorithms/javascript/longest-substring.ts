// Source: Leetcode #3
/* Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

function lengthOfLongestSubstring(s: string): number {
    // initialize length to 0
    let length = 0;
    // initialize window pointer
    let start = 0;
    // initialize empty string
    let str = "";
    // iterate through string
    for (let i = 0; i < s.length; i++){
        // check if string includes current letter
        if (!str.includes(s[i])){
            // if it does not, add letter to new string
            str += s[i];
            // if length of curr string is greater than length, update length
            if (str.length > length) length = str.length;
        }
        // if it does: update window until it does not
        else {
            while (str.includes(s[i])){
                str = str.slice(1);
            }
            str += s[i]
        }
    }
    // return length
    return length;
};

console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('abcbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))