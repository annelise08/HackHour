# Source: HackerRank

# A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

# Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

# A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

# By this logic, we say a sequence of brackets is balanced if the following conditions are met:

# It contains no unmatched brackets.
# The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
# Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

def isBalanced(s):
    # Write your code here
    # initialize a list (will be a stack)
    temp = []
    parens = {']': '[',
        '}': '{',
        ')': '('}
    # iterate through string
    for char in s:
        # if current character is opening bracket, add it to list
        if char in ['{', '[', '(']:
            temp.append(char)
        # if char is closing bracket, see if last character is matching opening
        elif char in parens:
            # if it is, remove it
            if len(temp) > 0:
                if temp[len(temp) - 1] == parens[char]:
                    temp.pop()
                else: return 'NO'
            # if it is not, return NO
            else: return 'NO'
    # return YES
    if len(temp) == 0:
        return 'YES'
    else: return 'NO'