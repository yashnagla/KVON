i = 20
if (i > 0):
    print(i,"is positive")
else:
    print("i is 0 or Negative")


age = 25
experience = 10
if age > 23 and experience > 8:
    print("Eligible.")
else:
    print("Not eligible.")


i = 10
if (i == 10):
    if (i < 15):
        print(i ,"is smaller than 15")
    if (i < 12):
        print(i ,"is smaller than 12 too")
    else:
        print(i ,"is greater than 15")
else:
    print("i is not equal to 10")


i = 25
if (i == 10):
    print(i ,"is 10")
elif (i == 15):
    print(i ,"is 15")
elif (i == 20):
    print(i ,"is 20")
else:
    print(i ,"is not present")


# Q Write a program to check whether a number entered by user is even or odd.
num = int(input("Enter a number :- "))
if (num % 2 == 0):
    print("Even")
else:
    print("Odd")

# Q Write a program to check whether a number is divisible by 7 or not.
num = int(input("Enter a number :- "))
if (num % 7 == 0):
    print(num, "is divisible to 7.")
else:
    print("Not a valid number.")

# Q. Write a program to Isp ay "Hello" 1 a num er entere of five, otherwise print "Bye".
num = int(input("Enter a number :- "))
if (num % 5 == 0):
    print("Hello")
else:
    print("Buy")


# Q Write a program to check whether the last digit of a number( entered by user ) is divisible by 3 or not.
num = int(input("Enter a number :- "))
divisible = num % 3
if (divisible == 3):
    print("Last digit is 3")
else:
    print("Last digit is not 3")