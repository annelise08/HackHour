// Source: Leetcode #125

/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.*/

// i: string
// o: boolean

// using recursion
function palindrome(str: string) {
    // convert string to lowercase
    str = str.toLowerCase();
    // remove all non-alphanumeric characters
    const regEx = /\W/g;
    str = str.replace(regEx, "");
    // base case: string is empty or only 1 character: return true
    if (str.length <= 1) return true;
    // recursive case: 
        // check if first and last character are the same
    if (str[0] === str[str.length - 1]){
        // if they are, remove first and last char, return call of palindrome
        str = str.slice(1, str.length - 1);
        return palindrome(str);
    } // if they are not, return false
    else return false;
}

console.log(palindrome("A man, a plan, a canal: Panama"))
console.log(palindrome("A, a plan, a canal: Panama"))
console.log(palindrome("race a car"))
console.log(palindrome(" "))

// using two pointers
function isPalindrome(s: string){
    // convert to lowercase
    s = s.toLowerCase();
    // remove non-alphanumeric characters
    s = s.replace(/[^a-z0-9]/g, "");
    // initialize pointers
    let start: number = 0;
    let end: number = s.length - 1;
    // iterate through string, checking if chars match
    while (start < end){
        if (s[start] !== s[end]) return false;
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("A, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))