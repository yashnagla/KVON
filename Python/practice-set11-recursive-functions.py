# Q1 Write a recursive function to calculate the sum of first n natural numbers.
def sum(n) :
    if (n == 0):
        return 0
    return sum(n - 1) + n
print(sum(5))

# Q2 Write a recursive function to print all elements in a list. Hint : use list & index as parameters.
list1 = ["Mango", "Kiwi", "Apple", "Banana"]

def printList(x, idx=0):
    if(idx == len(x)) :
        return
    print(x[idx])
    printList(x ,idx + 1)

printList(list1)