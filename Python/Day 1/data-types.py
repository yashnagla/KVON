#  Numeric Data Type
var1 = 1
var2 = True
var3 = 1.2362
var4 = 10+3j

print(var1, type(var1))
print(var2, type(var2))
print(var3, type(var3))
print(var4, type(var4))


# String Data Type
str = "Hello World!"
print(type(str))
print(str)
print(str[0])
print(str[2:5])
print(str[2:])
print(str * 2)
print(str + " Test")

# List Data Type
x = [['One', 'Two', 'Three'], [1,2,3], [1.0, 2.0, 3.0]]
y = [1,2,3,4,5,6]
print(x)
print(type(x))
print(x[0])
print(x[1:3])
print(x[2:])
print(x * 2)
print(x + y)

# Tuple Data Type
tup = ('abcd', 786 , 2.23, 'john', 70.2)
tup2 = (1,2,3,4,56,7,87)
print(tup)
print(tup[0])
print(tup[1:3])
print(tup[2:])
print(tup * 2)
print(tup + tup2)

# Range Function
for i in range(5):
    print(i)
for i in range(2,5):
    print(i)
for i in range(1,5,2):
    print(i)

# Bytes Data Type
b1 = bytes([65, 66, 67, 68, 69, 90])  
print(b1)
b2 = b'Hello'  
print(b2)

# Bytearray Data Type
ba1 = bytearray([72, 101, 108, 108, 111])
print(ba1)

# Memoryview Data Type
dt = bytearray(b"Hello World!")
mv = memoryview(dt)
print(mv)

# Dictionary Data Type
dic = {1:'one', 2:'two', 3:'three'}
print(dic)
print(type(dic))
print(dic[1])
print(dic[2])
print(dic[3])
dic[3] = "updatedThree"
print(dic[3])
dic[4] = "Four"
print(dic)

# Set Data Type
st = {1,2,3,4,5,6,7,8,9,0}
print(st)
print(type(st))

# Boolean Data Type
f1 = 1
f2 = 3
print(bool(f1==f2))
print(bool(f1<=f2))
print(bool(f1>=f2))
a = ()
print(bool(a))
a = 0.0
print(bool(a))
a = 10
print(bool(a))

# None Type
x = None
print(x)
print(type(x))