# Source: HackerRank

# Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

def gridChallenge(grid):
    # Write your code here
    # iterate through outer list
    for i, string in enumerate(grid):
        # sort the inner list alphabetically
        grid[i] = ''.join(sorted(string))
    # iterate through column, making a new list of that column
    for i in range(len(grid[0])):
        # make a string of each column
        column = ''
        for j in range(len(grid)):
            column += grid[j][i]
        # sort the column and check if it matches the unsorted column
        sortedColumn = ''.join(sorted(column))
        # if it does not match, return NO
        if sortedColumn != column: return 'NO'
    # if all columns match, return YES
    return 'YES'