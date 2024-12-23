# fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
# (green, yellow, *red) = fruits
# print(green)
# print(yellow)
# print(red)


# thistuple = ("apple", "banana", "cherry")
# for x in thistuple:
#     print(x)
 
# thistuple = ("apple", "banana", "cherry")
# for i in range(len(thistuple)):
#     print(thistuple[i])


# fruits = ("apple", "banana", "cherry")
# mytuple = fruits * 2
# print(mytuple)

# tuple1 = ('a', 'b' , 'c')
# tuple2 = (1, 2, 3)
# tuple3 = tuple2 + tuple1
# print(tuple3)

# a = 20
# b = 22
# print("A is greater.") if a > b else print("B is greater.")

# Looping Through String
# for x in "banana":
#     print(x)

# fruits = ["apple", "banana", "cherry"]
# for x in fruits:
#     print(x)
#     if x == "banana":
#         break
    
# for x in fruits:
#     if x == "banana":
#         continue
#     print(x)

# for x in range(1, 5):
#     print(x)

# for x in range(5):
#   for y in range(5):
#     print(x, y) 

# def my_function(*kids):
#     print("The youngest child is " + kids[0])
# my_function("Emil", "Tobias", "Linus") 


# def my_function(**kid):
#     print("His last name is" , kid["fname"]  , kid["lname"]  , kid["age"])
# my_function(fname = "Tobias", lname = "Refsnes", age = 23)

# def my_function(food):
#   for x in food:
#     print(x)
# nums = [1,2,3,4,5]
# my_function(nums)

# for x in range(3):
#   print(x)

# y = lambda a : a + 10
# print(y(5))
# print(y(15))
# print(y(25))

# def sum(n):
#     return lambda a : a + n
# add = sum(10)
# print(add(11))

x = 5
y = 6
class Sum:
  z = x + y

sum1 = Sum()
print(sum1.z)

i =0 
while i < 5:
  if i ==0:
    continue
  i += 1
  print(i)
# else:
  break
