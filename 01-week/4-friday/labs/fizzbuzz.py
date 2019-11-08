number_list = [4,0,3,7,5,8,15]
for number in  number_list:
    #if number ==0:
    #print(number)
    if number !=0 and number %3 == 0 and number %5 ==0:
        print("Fizzbuzz!")
    elif number % 3 == 0:
        print("Fizz")
    elif number % 5 == 0:
        print("Buzz")
    else:
        print(number)
