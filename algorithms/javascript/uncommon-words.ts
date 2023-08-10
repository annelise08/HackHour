// Source: Leetcode #884
/* A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

*/

// input: two strings
// output: array of strings
function uncommonFromSentences(s1: string, s2: string): string[] {
    // separate both strings into arrays of words
    const arr = s1.split(' ').concat(s2.split(' '));
    // initialize an object to store words and counts
    interface WordCountsInterface {
        [key: string]: number
    }
    const wordCounts: WordCountsInterface = {};
    // iterate over each array of strings
    for (const word of arr){
        // add word or increment count for each word in object
        wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1;
    }
    // initialize new array
    const uncommonWords: string[] = [];
    // iterate over object, adding words with count 1 to new array
    for (const word in wordCounts){
        if (wordCounts[word] === 1) uncommonWords.push(word);
    }
    // return new array
    return uncommonWords;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"))