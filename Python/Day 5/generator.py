# A generator function that yields 1 for first time,2 second time and 3 third time, to print the next value
def fun():
    yield 1
    yield 2
    yield 3
for val in fun():
    print(val)

# Q1 Write a Python program that creates a generator function that yields cubes of numbers from 1 to n. Accept n from the user.
n = int(input("Enter a number to find cube of :- "))
def cubGen(n):
    for i in range(1, n+1):
        yield i**3
cubes = cubGen(n)
print(cubes)
for num in cubes:
    print(num)

# Q2 Write a Python program to implement a generator that generates random numbers within a given range.
import random

start = int(input("Enter range start point :- "))
end = int(input("Enter range end point :- "))

def ranRange(start,end):
    while True:
        yield random.randint(start,end)
ranNum = ranRange(start,end)
for i in range(10):
    print(next(ranNum))

# Q3 Write a Python program that creates a generator function that generates all prime numbers between two given numbers.
n = int(input("Enter the number of prime number you want to print :- "))
def isPriNum(n):
    if n <= 1:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True
def primeNumGenerator():
    n = 2
    while True:
        if isPriNum(n):
            yield n
        n += 1
primes = primeNumGenerator()
print(n)
for i in range(n):
    print(next(primes))

# Q4 Write a Python program to implement a generator function that generates the Fibonacci sequence.
def fibonacci():
    x, y = 0, 1
    while True:
        yield x
        x, y = y, x + y

n = int(input("Enter the number of fibonacci number you want to print :- "))

print(n)

fib = fibonacci()
for i in range(n):
    print(next(fib),end=" ")

# Q5 Write a Python program to implement a generator function that generates all permutations of a given list of elements.
def listPermutation(ele):
    if len(ele) <= 1:
        yield ele
    else:
        for p in listPermutation(ele[1:]):
            for i in range(len(ele)):
                yield p[:i] + ele[0:1] + p[i:]
nums = [1, 2, 3]
print(nums)
for p in listPermutation(nums):
    print(p)

# Q6 Write a Python program to implement a generator that yields all possible combinations of a given list of elements.
def listCom(ele, r):
    if r == 0:
        yield []
    elif r > len(ele):
        return
    else:
        for i in range(len(ele)):
            currEle = ele[i]
            remEle = ele[i+1:]
            for combi in listCom(remEle, r-1):
                yield [currEle] + combi
nums = [1,2,3,4]
print(nums)

r = int(input("Input length of each combination :- "))

for comb in listCom(nums, r):
    print(comb)