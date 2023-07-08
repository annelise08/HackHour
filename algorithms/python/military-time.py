# Source: Hackerrank
#  Given a time in -hour AM/PM format, convert it to military (24-hour) time.

# Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
# - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

# Example


# Return '12:01:00'.


# Return '00:01:00'.

# Function Description

# Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

# timeConversion has the following parameter(s):

# string s: a time in  hour format
# Returns

# string: the time in  hour format

def timeConversion(s):
    # find hh mm ss for string
    hh = s[0:2]
    mm = s[3:5]
    ss = s[6:8]
    AMPM = s[8:]
    # for any time between 12:00:00 AM and 12:59:59 AM, make time 00:XX:XX
    if hh == '12' and AMPM == 'AM':
        hh = '00'
    # for any time between 01:00:00PM and 11:59:59PM, make time (XX + 12):XX:XX
    elif int(hh) > 0 and int(hh) < 12 and AMPM == 'PM':
        hh = str(int(hh) + 12)
    # remove AM/PM and return string
    return hh + ':' + mm + ':' + ss