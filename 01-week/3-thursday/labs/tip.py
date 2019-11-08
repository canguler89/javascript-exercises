total_bill = int(input ('Total bill amount?'))
service = input('Level of service?')


if service == ('good'):

    i = (total_bill * 0.2)
    x = (total_bill + i)
    print("Tip amount :" , i )
    print("Total amount :", x)
elif service == ('fair'):

    g = (total_bill * 0.15)
    y = (total_bill + g)
    print("Tip amount :" , g )
    print("Total amount :", y)
elif service == ('bad'):
    j = (total_bill * 0.1)
    z = (total_bill + j)
    print("Tip amount :" , j )
    print("Total amount" , z)
else:
    pass