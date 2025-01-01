# Q1 Write a Python program to create a decorator that logs the arguments and return value of a function.
def decorator(func):
    def wrap(*args, **kwargs):
        print(f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrap
@decorator
def multi_num(x, y):
    return x*y
result = multi_num(10, 20)
print(result)


# Q2 Write a Python program to create a decorator function to measure the execution time of a function.
import time
def measureExecutionTime(func):
    def wrapper(*args, **kwargs):
        startTime = time.time()
        result = func(*args, **kwargs)
        endTime = time.time()
        executionTime = endTime - startTime
        print(f"Function {func.__name__} took {executionTime:.4f} seconds to execute.")
        return result
    return wrapper
@measureExecutionTime
def calMulti(numbers):
    tot = 1
    for x in numbers:
        tot *= x
    return tot
result = calMulti([1,2,3,4,5])
print(result)


# Q3 Write a Python program to create a decorator to convert the return value of a function to a specified data type.
def convertDataType(dataType):
    def decorator(func):
        def wrapper(*args, **kwargs):
            result = func(*args, **kwargs)
            return dataType(result)
        return wrapper
    return decorator
@convertDataType(int)
def addNum(x, y):
    return x+y
result = addNum(10, 20)
print(result, type(result))


# Q4 Write a Python program that implements a decorator to cache the result of a function.
def cacheResult(func):
    cache = {}
    def warpper(*arge, **kwargs):
        key = (*arge, *kwargs.items())
        if key in cache:
            print('...........')
            return cache[key]
        result = func(*arge, **kwargs)
        cache[key] = result
        print(',,,,,,,,,,,,,,,,,')
        return result
    return warpper
@cacheResult
def calMul(x, y):
    return x*y
print(calMul(4, 5))
print(calMul(4, 5))
print(calMul(5, 5))
print(calMul(4, 5))
print(calMul(5, 5))
print(calMul(-3, 7))


# Q5 Write a Python program that implements a decorator to validate function arguments based on a given condition.
def cacheCube(condition):
    def decorator(func):
        def warpper(*arge, **kwargs):
            if condition(*arge, **kwargs):
                print("........")
                return func(*arge, **kwargs)
            else:
                raise ValueError("Invalid")
        return warpper
    return decorator
@cacheCube(lambda x : x > 0)
def calCubs(x):
    print(":::::::::::::")
    return x ** 3
print(calCubs(3))
print(calCubs(3))
print(calCubs(5))
print(calCubs(9))