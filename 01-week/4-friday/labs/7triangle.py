#num = 1
#while num < 8:
#    pyramid_line = ''
#    if num % 2 == 1:
#        print('*')
#    num += 1


x = 10
space = ' '
for i in range (1,8,2):
    print ((space * x) + (i * '*'))
    x = x - 1



#print ('   *')
#print ('  ***')
#print (' *****')
#print ('*******')
