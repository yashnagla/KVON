# Dictionary

# Q1 Store following word meanings in a python dictionary :
# table : "a piece of furniture", "list of facts & figures"
# cat : "a small animal"
# dict = {
#     "table" : ["a piece of furniture", "list of facts & figures"],
#     "cat" : "a small animal"
# }
# print(dict)


# Set
# Q2 You are given a list of subjects for students. Assume one classroom is required for 1 subject. How many classrooms are needed by all students. "python", "java", "C++", "python", "javascript", "java", "python", "java", "C++", "C"
# setSubjects = {"python", "java", "C++", "python", "javascript", "java", "python", "java", "C++", "C"}
# print("Classroom required for all students :- ", len(setSubjects))


# Q3 WAP to enter marks of 3 subjects from the user and store them in a dictionary. Start with an empty dictionary & add one by one. Use subject name as key & marks as value.

# students = {
#     "name" : input("Enter Students Name :- "),
#     "sub1" : int(input("Enter marks of Subject 1 :- ")),
#     "sub2" : int(input("Enter marks of Subject 2 :- ")),
#     "sub3" : int(input("Enter marks of Subject 3 :- ")),
# }

# print(students)


# Q4 Figure out a way to store 9 & 9.0 as separate values in the set. (You can take help of built-in data types)
val = {
    ("float", 9.0),
    ("int", 9)
}
print(val) 