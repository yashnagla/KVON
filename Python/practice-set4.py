# Q1 WAP to ask the user to enter names of their 3 favorite movies & store them in a list.
# moviesName1 = input("Enter your 1st faverite movie name :- ")
# moviesName2 = input("Enter your 2nd faverite movie name :- ")
# moviesName3 = input("Enter your 3rd faverite movie name :- ")
# movieList = (moviesName1, moviesName2, moviesName3)

# print(movieList)

# Q2 WAP to check if a list contains a palindrome of elements. (Hint: use copy() method)
mainList = [1,2,3,2,1]
copyList = mainList.copy()
copyList.reverse()
if (mainList == copyList) :
    print("List is Palindrome")
else:
    print("List is not a Palindrome")

# Q3 WAP to count the number of students with the "A" grade in the following tuple. ["C", "D", "A", "A", "B", "B", "A"]
grade = ("C", "D", "A", "A", "B", "B", "A")
print("Count of students with A grade is :- ", grade.count("A"))
print("Count of students with A grade is :- ", grade.count("B"))
print("Count of students with A grade is :- ", grade.count("C"))
print("Count of students with A grade is :- ", grade.count("D"))

# Q4 Store the above values in a list & sort them from "A" to "D".
gradeList = ["C", "D", "A", "A", "B", "B", "A"]
gradeList.sort()
print("The sorted List of Students according to grades :- ", gradeList)