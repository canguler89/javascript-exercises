duplicate = ["Alex", "John", "Mary", "Steve", "John", "Steve"]

def remove(duplicate):
    final_list = []
    for names in duplicate:
        if names not in final_list:
            final_list.append(names)
    print(final_list)

remove(duplicate) 