# Reading File

# f = open("demo.txt", "r")
# data = f.read()
# line1 = f.readline()
# line2 = f.readline()
# print(data)
# print(line1)
# print(line2)
# print(type(data))
# f.close()

# Writing File

# w = open("demo.txt", "w")
# w.write("I am using w to override the file.")
# w.close()

# Append in File

# a = open("demo.txt", "a")
# a.write("I an using a to append the text in the end of the file.")
# a.close()

# with open("demo.txt", "r") as f :
#     data = f.read()
#     print(data)

# with open("demo.txt", "w") as f :
#     f.write("New Data")
#     print(data)

# import os
# os.remove("demo.txt")