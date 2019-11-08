h = int ( input("Height?"))
w = int ( input("Weight?"))


for row in range(0,h +1):
    for col in range(0, w +1):
        if( row == 0 or row == h or col == 0 or col == w):
            print('*', end = ' ')
        else:
            print(' ', end = ' ')

    print()

