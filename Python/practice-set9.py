# Q1 WAP to find the sum of first n numbers. (using while)
n = int(input("Enter the number :- "))
sum = 0
i = 1
while i <= n:
    sum += i
    i += 1
print(sum)

# Q2 WAP to find the factorial of first n numbers. (using for)
n = int(input("Enter the number :- "))
fac = 1
for i in range(1, n+1) :
    fac *= i
print(fac)