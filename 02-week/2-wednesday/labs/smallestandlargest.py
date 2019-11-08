num1 = int ( input('Write num1: '))
num2 = int ( input ('Write num2: '))
num3 = int ( input('Write num3: '))

def smallest_num(num1,num2,num3):

    if num1 < num2 and num1 < num3:
        small = num1

    elif num2 < num1 and num2 < num3:
        small = num2
    else:
        small =num3

    print("the smallest number is ", small)

def largest_num(num1,num2,num3):

    if num1 > num2 and num1 > num3:
        largest = num1

    elif num2 > num1 and num2 > num3:
        largest = num2

    else:
        largest = num3
    print('The largest number is: ', largest)


largest_num(num1,num2,num3)

smallest_num(num1,num2,num3)