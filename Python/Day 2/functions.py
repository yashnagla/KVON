# Q Write a user defined function to find the area of rectangle.
def rect(a,b) :
    print(a*b)
rect(5,6)


# Write a user defined function to print "Python Fundamentals" five times.
def str(a) :
    print(a * 5)
str("Hello")

# Write a user defined function to find the volume of cube.
def cube(a) :
    print(a*a*a)
cube(5)

# Q WAF to print the length of a list. ( list is the parameter)
list1 = [1,2,3,4,5,6,7,8,9,0]
list2 = [1,8,9,0]
def listLength(a):
    print(len(a))
listLength(list1)
listLength(list2)


# Q2 WAF to print the elements of a list in a single line. ( list is the parameter)
list1 = [1,2,3,4,5,6,7,8,9,0]
list2 = [1,8,9,0]
def listElement(a):
    for val in a:
        print(val, end=" ")
listElement(list1)
listElement(list2)


# Q WAF to find the factorial of n. (n is the parameter)
def cal_fact(n):
    fact = 1
    for i in range(1, n+1):
        fact *= i
    print(fact)
num = int(input("Enter number to find factorial :- "))
cal_fact(num)
cal_fact(int(input("Enter number to find factorial :- ")))


# Q WAF to convert USD to INR.
def converter(usd_val):
    print(usd_val, "USD =",usd_val * 85, "INR")
converter(100)

# Q WAF to print even ot odd based on input
def num(y):
    if (y % 2 == 0) :
        print("Even")
    else:
        print("Odd")

num1 = int(input("Enter number and see weather it is a even or odd :- "))
num(num1)