# Q1 Write a program to print all numbers from 1 to 10 using a for loop and the range ( ) function.
for i in range(1, 11):
    print(i)

# Q2 Write a program to print all even numbers between 1 and 20.
for i in range(0, 21, 2) :
    print(i)

# Q3 Use a for loop to print numbers from 10 down to 1 in reverse order.
for i in range(10, 1, -1):
    print(i)

# Q4 Write a program to calculate the sum of all numbers from 1 to 50 using a for loop.
total = 0
for i in range(1, 51):
    total += i
    print(total)

# Q5 Write a program that generates the multiplication table of a given number (e.g., 5) using a for loop and range ().
num = int(input("Enter a number :- "))
for i in range(1, 11) :
    print(num*i)

# Q6 Use a for loop to print numbers from 1 to 50, skipping every third number (e.g., 1, 4, 7, ...)
for i in range(1, 50, 3) :
    print(i)

# Q7 Write a program that prints the squares of all numbers from 1 to 10.
for i in range(1,11) :
    print(i*i)

# Q8 Write a program to calculate the sum of all odd numbers between 1 and 50 using a for loop and range().
oddSum = 0
for i in range(1,51) :
    if i%2==0 :
        oddSum += i
print(oddSum)

# Q9 Use nested for loops to generate the following pattern:   # Having Problem


# Q10 Write a program to print all prime numbers between 1 and 50 using a for loop and range(). (Hint: Use an inner for loop to check divisibility of each number.) # Having Problem