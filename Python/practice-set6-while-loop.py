# Q1 Print numbers from 1 to 100.
count = 1
while count <= 100 :
    print(count)
    count += 1

# Q2 Print numbers from 100 to 1.
reverseOfCount = 100
while reverseOfCount >= 1 :
    print(reverseOfCount)
    reverseOfCount -= 1

# Q3 Print the multiplication table of a number n.
i = 1
n = int(input("Enter the number your multiplication table of :- "))
while i <= 20 :
    print(n, " * ", i, " = ", n * i)
    i += 1

# Q4 Print the elements of the following list using a loop: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
x = 0
list = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
while x <= len(list)-1 :
    print(list[x])
    x += 1

# Q5 Search for a number x in this tuple using loop: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
tup = (1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
print(tup)
x = int(input("Enter the number you want to find form the above tuple :- "))
i = 0
while i <= len(tup):
    if(tup[i] == x):
        print("Found at",i)
        break
    else:
        print("Finding..")
    i += 1