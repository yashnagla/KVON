# Q1 WAP to check if a number entered by the user is odd or even.
num = int(input("Enter a number to check it is odd or even :- "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

# Q2 WAP to find the greatest of 3 numbers entered by the user.
a = int(input("Enter the value of a :-"))
b = int(input("Enter the value of b :-"))
c = int(input("Enter the value of c :-"))
if(a >= b and a >= c):
    print("A is greatest")
elif(b >= a and b >= c):
    print("B is greatest")
else:
    print("C is greatest")

# Q3 WAP to check if a number is a multiple of 7 or not.
check = int(input("Enter a number to check if it is multiple of 7 or not :- "))
if check % 7 == 0:
    print("Yes, numeber is multiple of 7")
else:
    print("No, numeber is not multiple of 7")