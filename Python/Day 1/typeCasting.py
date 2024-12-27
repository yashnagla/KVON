# Implicit Casting
a=True
b=10.5
c=a+b
print(c)

# Explicit Casting
a = int("110011", 2)
print(a)

a = int("20", 8)
print(a)

# Hexa-Decimal String to Integer
a = int("2A9", 16)
print(a)

a=[1,2,3,4,5]
b=(1,2,3,4,5)
c="Hello"

print(list(c))

print(tuple(c))

print(str(b))

result = complex(1, 5)
print(result)

integer_number = 111
print(hex(integer_number))

integer_number = 219
print(oct(integer_number))