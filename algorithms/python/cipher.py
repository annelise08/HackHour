# Source: HackerRank

# Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

# Original alphabet:      abcdefghijklmnopqrstuvwxyz
# Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

def caesarCipher(s, k):
    # Write your code here
    # ascii + integer mod 26
    # declare new empty string
    newS = ''
    # interate through characters in input string
    for char in s:
    # if character is letter
        if char.isalpha():
            # decipher letter and add to new string
            if char.islower():
                newS += chr((ord(char) + k - 97) % 26 + 97)
            else: newS += chr((ord(char) + k - 65) % 26 + 65)
        # otherwise, just add character
        else: newS += char
    return newS