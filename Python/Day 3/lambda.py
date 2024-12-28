# Q WAP to print the square of a user input number using lambda
x = int(input("Enter a number to find the square :- "))
sq = lambda x : x ** 2
print(sq(x))

# Q WAP to sort a list using lambda function.
fruits = ["kiwi", "apple", "orange", "mango", "banana"]
sortedList = sorted(fruits, key = lambda x : x)
print(sortedList)

# Q WAP to find square of each element of a list and store them to another empty list.
numList = [1,2,3,4,5,6,7,8,9,10]
sqList = [(lambda x : x**2)(x) for x in numList]
print(sqList)

# Q Using a lambda function to sort a list of strings by the last character
myList = ["apple", "banana", "cherry"]
sortList = sorted(myList, key = lambda x : x[-1])
print(sortList)

# Q WAP to find square of each element of a list and store them to another empty list using lambda function and map function.
lsi = [1,2,3,4,5,6,7,8,9,10]
newList = list(map(lambda x : x ** 2, lsi))
print(newList)

# Q Write a Python program to sort a list of tuples using Lambda. Original list of tuples: [('English', 88), ('Science', 90), ('Maths', 97), ('Social sciences', 82)]
tup = [('English', 88), ('Science', 90), ('Maths', 97), ('Social sciences', 82)]
sorList = sorted(tup, key = lambda x : x[1])
print(sorList)

# Q Write a Python program to sort a list of dictionaries using Lambda. Original list of dictionaries : [{'make': 'Nokia', 'model': 216, 'color': 'Black'}, {'make': 'Mi Max', 'model': '2', 'color': 'Gold'}, {'make': 'Samsung', 'model': 7, 'color': 'Blue'}]
listOfDict = [
    {'make': 'Nokia', 'model': 216, 'color': 'Black'},
    {'make': 'Mi Max', 'model': '2', 'color': 'Gold'},
    {'make': 'Samsung', 'model': 7, 'color': 'Blue'}
    ]
sortedDict = sorted(listOfDict, key = lambda x : x['make'])
print(sortedDict)

# Q Write a Python program to filter a list of integers using Lambda. Original list of integers:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
eNum = list(filter(lambda x : (x % 2 == 0), num))
print(eNum)