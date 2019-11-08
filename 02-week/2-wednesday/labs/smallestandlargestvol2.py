
list1 = [] 

how_many_numbers = int(input("how many numbers in list: ")) 


for i in range(how_many_numbers): 
	numbers = int(input("Enter numbers: ")) 
	list1.append(numbers) 


print("Smallest number is:", min(list1)) 

print("The largest number is ", max(list1))

