# numbersArray = [25, 23, 21, 4, 1, 7, 8, 9, 3, 14, 11, 15, 16, 33]
# number = int(input("enter a number you want to find: "))
# checkNumber = 0
# for i in numbersArray:
#     if i == number:
#         print('Number found in array!!!')
#         checkNumber = 1
#         break
# if checkNumber == 0:
#     print('Number not found')


array1 = [1, 2, 3, 4, 5, 6]
array2 = [4, 5, 6, 7, 8, 9]

# nested loops
for x in array1:
    for y in array2:

        if x == y:
            print('Numbers match in the arrays')
