# Q1 Print the elements of the following list using a loop: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
list1 = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
for val in list1:
    print(val)

# Q2 Search for a number x in this tuple using loop: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
tup = (1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 49)
i = 0
x = int(input("Enter the number you want to find :- "))
for el in tup:
    if (el == x):
        print(x, " Found at index ",i)
    i += 1
