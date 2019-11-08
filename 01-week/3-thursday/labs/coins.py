print("You have 0 coins.")
i = 1
while i > 0:
    coins = input("Do you want another?")
    if coins == "yes":
        i = i + 1
        print("You have " + str(i) + " coins")
    else:
        print("bye!")
        break

