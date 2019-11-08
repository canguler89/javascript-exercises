total_bill = int(input("Total bill amount?"))
service = input("Level of service?")
split = int (input("Split how many ways?"))
tip = (total_bill * 0.2 )

if service == "good":

    print("Total amount:" , total_bill)
    print("Tip" , tip)
    print("Amount per person :" , (total_bill + tip) /split)
