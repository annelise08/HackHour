// Source: Leetcode #392

/* Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/

// could potentially solve using recursion

// i: two strings, s and t
// o: boolean

function isSubsequence(s: string, t: string): boolean {
    // initialize pointers
    let i: number = 0;
    let j: number = 0;
    // if empty string, return true
    if (s === "") return true;
    // while t pointer is less than length of t
    while (j < t.length){
        // if elements at s and t match
        if (s[i] === t[j]){
            // if s is at last element, return true
            if (i === s.length - 1) return true;
            // otherwise, increment s and t pointers
            i++;
            j++;
        }
        // if elements don't match, just increment t pointer
        else j++;
    }
    // return false
    return false;
};

console.log(isSubsequence("abc", "ahbgdc"))
console.log(isSubsequence("axc", "ahbgdc"))