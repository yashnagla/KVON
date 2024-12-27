# Q. Write program to print the following pattern.
# 1
# 12
# 123
# 1234
# for i in range(1, 5+1):
#     for j in range(1, i+1):
#         print("*", end=" ")
#     print()


# Q Write program to print the following pattern.
# *****
# ****
# ***
# **
# *
# for i in range(5+1, 1, -1):
#     for j in range(i-1):
#         print("*", end=" ")
#     print()

# Q Accept 10 numbers from the user and display their average.
# responses = [input(f"Enter input {i + 1}: ") for i in range(10)]
# sum = 0
# for i in range(10):
#     num = int(input("Enter number :- "))
#     sum += num
# print("Average of 10 entered numbers is :- ", sum/(i+1))

# Q Write a program to print all prime numbers that fall between two numbers including both(accept two numbers from the user)
# a = int(input("Enter the starting number :- "))
# b = int(input("Enter the ending number :- "))
# for num in range(a, b + 1):
#     if num > 1:
#         for i in range(2, int(num ** 0.5) + 1):
#             if num % i == 0:
#                 break
#         else:
#             print(num, end=" ")