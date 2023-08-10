// Source: Leetcode #1832
/* A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise. 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false */

function checkIfPangram(sentence: string): boolean {
    // create a set of all letters of alphabet
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz'.split(''));
    // iterate through letters in string
    for (let letter of sentence){
        // if letter is in set, remove it
        if (alphabet.has(letter)) alphabet.delete(letter);
        // if set is empty, return true
        if (alphabet.size === 0) return true;
    }
    // return false
    return false;
};

console.log(checkIfPangram('hello'))
console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'))