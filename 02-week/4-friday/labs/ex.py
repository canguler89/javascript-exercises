#less than 70 it is ok
# every 5 mph 1 points print out
#more than 12 points licence suspended


speed = int (input('What is your speed?'))

if speed >= 130:
    print('you have 12 points')
    print('licence suspended')
elif speed <= 70:
    print('ok')
else:
    print('you have points')
