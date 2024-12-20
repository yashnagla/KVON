# Q1 :- Write a programm to input 2 numbers and print their sum.

firstNum = int(input("Enter first number :- "))
secondNum = int(input("Enter second number :- "))
print("Sum of two number is ", firstNum + secondNum)

# Q2 WAP to input side of a square and print its area.
side = int(input("Enter Side of Square :- "))
area = side**2
print("Area of Square is ",area)

# Q3 WAP to input 2 float point numbers and print their average.
num1 = float(input("Enter value of num1 :- "))
num2 = float(input("Enter value of num2 :- "))
avg = (num1 + num2)/2
print("Average of given two numbers is ", avg)

# Q4 WAP to input 2 int numbers a and b. Print true if a grater than or equal to b, If not print False

a = int(input("Enter value of a :- "))
b = int(input("Enter value of b :- "))

print(a >= b)