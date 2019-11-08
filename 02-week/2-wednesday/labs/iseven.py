def is_even(number):
    return (number % 2 == 0)

print(is_even(5))


def is_odd(number):
    return not is_even(number)

print(is_odd(3)) 

def only_even(list_of_numbers):
    result = []

    for number in list_of_numbers:
        if is_even(number):
            result.append(number)

    print(result)

only_even([11,20,42,97,23,10])

def only_odds (list_of_numbers):
    result = []
    for number in list_of_numbers:
        if is_odd(number):
            result.append(number)
    print(result)

only_odds([11,20,42,97,23,10])
