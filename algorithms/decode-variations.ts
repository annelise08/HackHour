// Source: Pramp

/* A letter can be encoded to a number in the following way:
'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'

A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'
Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.
Examples:
input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'. */

function decodeVariations (S: string): number {
    // initialize variations to 1
    let variations: number = 1;
    // iterate through elements
    for (let i = 0; i < S.length - 1; i++){
        // if element is 1 and next element exists, add 1 to variations
        if (S[i] === '1') variations++;
        // if element is 2 and next element is less than 7, add 1 to variations
        if (S[i] === '2' && Number(S[i + 1]) < 7) variations++;
    }
    // return variations
    return variations;
}

console.log(decodeVariations('1262')) // 3