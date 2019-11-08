findingstrings = []
strings_numbers = int (input("how many strings do you want?"))


for i in range(strings_numbers):
    strings = ( input( "write your strings: "))
    findingstrings.append(strings)


print('the shortest string is ', min(findingstrings, key=len))
print('the longest string is ' , max (findingstrings, key=len))

print(findingstrings)  