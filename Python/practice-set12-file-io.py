# Q1 Create a new file "practice.txt" using python. Add the following data in it:
# Hi everyone
# we are learning File I/0
# using Java.
# I like programming in Java.
with open("practice.txt", "w") as f:
    f.write("Hi everyone\nwe are learning I/O\nusing Java.\nI like programming in Java.")


# Q2 WAF that replace all occurrences of "java" with "python" in above file.
with open("practice.txt", "r") as f:
    data = f.read()

newData = data.replace("Java", "Python")
print(newData)

with open("practice.txt", "w") as f:
    f.write(newData)

# Q3 Search if the word "learning" exists in the file or not.
with open("practice.txt", "r") as f:
    data = f.read()
    finding = data.find("learning")
    print("Found at", finding)

# Q4 WAF to find in which line of the file does the word "learning"occur first. Print -1 if word not found.
def check_word() :
    word = input("Enter word you want to find :- ")
    data = True
    line_no = 1
    with open("practice.txt", "r") as f:
        while data:
            data = f.readline()
            if(word in data):
                print(line_no, word)
                return
            line_no += 1
    return -1

check_word()

# Q5 From a file containing numbers separated by comma, print the count of even numbers.
with open("practice.txt", "w") as f:
    f.write("1, 2, 76, 88, 90, 101")

count = 0

with open("practice.txt", "r") as f:
    data = f.read()
    print(data)

    nums = data.split(",")
    # print(nums)
    for val in nums:
        if(int(val) % 2 == 0):
            count += 1
print(count)