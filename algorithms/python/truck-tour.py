# Source: HackerRank

#
# Complete the 'truckTour' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
#

def truckTour(petrolpumps):
    # Write your code here
    # iterate through array, each iteration will count as a starting point
    for i, pump in enumerate(petrolpumps):
        # initialize gas tank to 0
        gas = 0
        # iterate through array, beginning at curr index
        for j in range(len(petrolpumps)):
            index = (i + j) % len(petrolpumps)
            # add first number (gas) to gas tank, subtract second number (distance to next pump)
            gas += petrolpumps[index][0]
            gas -= petrolpumps[index][1]
            # if gas tank is less than 0, break
            if gas < 0:
                break
            # if index is last index, return index
            if index == i - 1:
                return i