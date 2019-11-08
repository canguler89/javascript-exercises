def prompt():
    return int(input("What do you wnat to do (1-5"))

def show_menu():
    print('Electronic Phone Book')
    print('=' * 21)
    print('1 - Look up an entry')
    print('2 - add an entry')
    print('3 - delete an entry')
    print('4 - list all entries')
    print('5 - Quit')
    
    def menu_selection():
        show_menu()
        return prompt()

    