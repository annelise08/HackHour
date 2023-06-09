
# We define super digit of an integer 
# x using the following rules:

# Given an integer, we need to find the super digit of the integer.

# If x has only 
# 1 digit, then its super digit is 
# x.
# Otherwise, the super digit of 
# x is equal to the super digit of the sum of the digits of 
# x.
# For example, the super digit of 
# 9875
# 9875 will be calculated as:

#     super_digit(9875)       9+8+7+5 = 29 
#     super_digit(29)     2 + 9 = 11
#     super_digit(11)     1 + 1 = 2
#     super_digit(2)      = 2  

# string n repeated k times
def superDigit(n, k):
    # Write your code here
    # make first superDigit (n repeated k times)
    # helper function to find super digit
    def helperFunc(x):
        # if x is only one digit, return x as int
        if len(x) == 1: return int(x)
        # otherwise, find superdigit of x
        # iterate through x
        total = 0
        for num in x:
            total += int(num)
        return helperFunc(str(total))
    # call helper function on n
    first = helperFunc(n)
    return helperFunc(str(first * k))