fruits = ['apple', 'banana', 'cherry']
print(fruits)
fruits.append("orange")
print(fruits)

x = fruits.copy()
print(x)

print(fruits.count("banana"))

cars = ['Ford', 'BMW', 'Volvo']
fruits.extend(cars)
print(fruits)

print(fruits.index("apple"))
print(fruits.index("banana"))

fruits.insert(4,"Kiwi")
print(fruits)

print(fruits.pop(1))

fruits.remove("Kiwi")
print(fruits)

fruits.reverse()
print(fruits)

fruits.sort()
print(fruits)

print(fruits.clear())