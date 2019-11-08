word = (input("Write a word!"))

letter_tally = {}


for i in word:
    if i in letter_tally:
        letter_tally[i] += 1
    else:
        letter_tally[i] = 1

    
print(letter_tally)
 