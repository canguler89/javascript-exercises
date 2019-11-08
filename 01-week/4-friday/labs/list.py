list = [4,2,0,3,5,7,11,13,16,20]
print(sum(list))
print(max(list))
print(min(list))

for number in list:
    if number % 2 == 0:
        print(number)

    else:
        print ("cannot")
for num in list:
    if num > 0:
        print(num)
    else:
        print("negative or zero")