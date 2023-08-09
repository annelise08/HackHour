// Source: Leetcode #20

/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type. */

function isValid(s: string): boolean {
    // create a stack (array)
    const arr: string[] = [];
    // create an object to store pairs of parenthesis

    interface ParensInterface {']': '[', '}': '{', ')': '('}
    const parens: ParensInterface = {']': '[', '}': '{', ')': '('}
    // iterate through string
    for (let char of s){
        // if it's an opening bracket, add it to the stack
        if (['[', '{', '('].includes(char)) arr.push(char)
        // if it's a closing bracket, check if it matches first element popped off of the stack
        if (parens.hasOwnProperty(char)){
            let last = arr.pop();
            if(parens[char as keyof ParensInterface] !== last) return false;
        }
    }
    // return true if stack is empty
    if (!arr.length) return true;
    // return false if stack is not empty
    return false;
};

console.log(isValid('()[]{}'))
console.log(isValid('()[]{}}'))