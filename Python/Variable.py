# x = 5
# print(x)

# y = "Yash"
# print(y)

# print(type(x))

# # Type Casting
# x = str(5)
# print(x)
# print(type(x))
# x = float(5)
# print(x)
# print(type(x))

# a = "Nipun"
# print(a)
# b = 'Harsh'
# print(b)

# print("Camel Case : helloWorld")
# print("Pascal Case : HelloWorld")
# print("Snake Case : hello_world")

# print("Assigning Multple values to multiple variables :-")
# x, y, z = "Red","Blue","Green"
# print(x)
# print(y)
# print(z)

# print("Assigning Single values to multiple variables :-")
# x = y = z = "Orange"
# print(x)
# print(y)
# print(z)

# print("Global Variable :-")
# gv = "Global Variable"

# def myfunc():
#     print("Python is " + gv)
# myfunc()

# # Random Number
# import random
# print(random.randint(1, 10))


# Data Types

# str = "Hello World"
# print(str[1])
# print(len(str[3]))
# print("Hello" in str)
# print("Hello" not in str)

# print(str[2:])
# print(str[2:len(str)-1:2])

# F-Strings
# age = 36
# txt = f"My name is John, I am {age}"
# print(txt)

# price = 59
# txt = f"The price is {price * 2} dollars"
# print(txt)

# print(bool("Hello"))
# print(bool(12))
# print(bool(0))

# mylist = ["apple", "banana", "cherry"]
# print(type(mylist))
# print(mylist)

# mylist[1] = "Potato"
# print(mylist)

# mylist.insert(len(mylist), "Banana")
# print(mylist)


# thislist = ["apple", "banana", "cherry"]
# for x in thislist:
#   print(x)

# for i in range(len(thislist)):
#    print(thislist[i]) 

# newlist = [x for x in thislist if x != "apple"]
# print(newlist)

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# newlist = []

# for x in fruits:
#   if "a" in x:
#     newlist.append(x)
# print(newlist)


# newlist = [x for x in fruits if "a" in x]
# print(newlist)

# newlist = [x.upper() for x in fruits]
# print(newlist)

# list1 = ["a", "b", "c"]
# list2 = [1, 2, 3]

# list3 = list1 + list2
# print(list3)

x = 'awesome'
def myfunc():
  global x
  x = 'fantastic'
myfunc()
print('Python is ' + x)

print(int(35.88))


print(10 > 9)

mylist = ['apple', 'banana', 'cherry']
mylist[1:2] = ['kiwi', 'mango']
print(mylist[2])