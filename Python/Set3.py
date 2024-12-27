# # Q1 Write a program to print all numbers from 1 to 10 using a for loop and the range ( ) function.
# for i in range(1, 11):
#     print(i)

# # Q2 Write a program to print all even numbers between 1 and 20.
# for i in range(0, 21, 2) :
#     print(i)

# # Q3 Use a for loop to print numbers from 10 down to 1 in reverse order.
# for i in range(10, 1, -1):
#     print(i)

# # Q4 Write a program to calculate the sum of all numbers from 1 to 50 using a for loop.
# total = 0
# for i in range(1, 51):
#     total += i
#     print(total)

# # Q5 Write a program that generates the multiplication table of a given number (e.g., 5) using a for loop and range ().
# num = int(input("Enter a number :- "))
# for i in range(1, 11) :
#     print(num*i)

# # Q6 Use a for loop to print numbers from 1 to 50, skipping every second number (e.g., 1, 4, 7, ...)
# li = [1,2,3,11,8,15,18,25,27,10, 35, 40, 45, 50, 55]
# for i in range(1,len(li), 2):
#     print(li[i])

# # Q7 Write a program that prints the squares of all numbers from 1 to 10.
# for i in range(1,11) :
#     print(i*i)

# # Q8 Write a program to calculate the sum of all odd numbers between 1 and 50 using a for loop and range().
# oddSum = 0
# for i in range(1,51) :
#     if i%2==0 :
#         oddSum += i
# print(oddSum)

# # Q9 Use nested for loops to generate the following pattern:   # Having Problem
# n = int(input("Enter a number :- "))
# for i in range(1, n+1):
#     for j in range(1,i+1):
#         print(j, end=" ")
#     print()


# # Q10 Write a program to print all prime numbers between 1 and 50 using a for loop and range(). (Hint: Use an inner for loop to check divisibility of each number.)
# a = int(input("Enter lower number of range :- "))
# b = int(input("Enter upper number of range :- "))

# for num in range(a, b+1):
#     if num > 1 :
#         for i in range(2, num):
#             if (num % i) == 0:
#                 break
#         else:
#             print(num)

# # Q12 WAP for right align with 10 char width 
# x = "Yash"
# print("%20s"%x)

# # Q11 Iterate over the range and convert code points back to characters
# for ch in range(ord("a"), ord("z")+1):
#     print(chr(ch), end=" ")


# a=7
# b=13
# z = a+b+(a*b)
# print(z)

# x = 5
# while x > 0:
#     print(x, end=" ")
#     x -= 1

# number = 10
# while number > 0:
#     print(number)
#     number -= 2

# x = int(input())
# def factorial(n):
#     num = 1
#     while n >= 1:
#         num *= n
#         n -= 1
#     return num

# f = factorial(x)

# print(f)

# # Count number of vowels from a string
# inpString = input("Enter an string :- ")
# vowels = "aeiou"
# count = 0
# index = 0
# while index < len(inpString):
#     if inpString[index] in vowels:
#         count += 1
#     index += 1
# print(count)

# T = int(input())
# for i in range(T):
#     A, B = map(int, input().split())
#     print(A + B)

# list1 = [1,2,3,11,8,15,18,25,27,10]
# sum = 0
# for i in range(len(list1), 2):
#     print(i)


# li = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
# li = [1,2,3,11,8,15,18,25,27,10, 35, 40, 45, 50, 55]
# sum = 0
# for i in range(0, 10, 2):
#     sum += i
#     print(sum,i)
# print("Total of alternative of list :-",sum)



# Q Leap year or not
# year = int(input("Enter a year to check if it's a leap or not :- "))
# if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0 :
#     print("It's a leap year.")
# else:
#     print("Not a leap year.")