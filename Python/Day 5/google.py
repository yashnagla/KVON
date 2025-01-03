text = "google"
firstG = text.find('g')
secondG = text.find('g', firstG+1)
if secondG != -1:
    text = text[:secondG] + 'x' + text[secondG+1:]
print(text)


text = input("Enter the string :- ")
target = input("Enter the character to replace :- ")
occur = int(input("Enter which occurrence to replace :- "))
replac = input("Enter the replacement character :- ")

count = 0
newText = ""

for index, char in enumerate(text):
    if char == target:
        count += 1
        if count == occur:
            newText += replac
            continue
    newText += char
print("New String :- ", newText)

text = "google"
listG = list(text)
print(listG)
count = 0
for i in range(len(listG)):
    if listG[i] == 'g':
        count += 1
        if count == 2:
            listG[i] = 'x'
print(listG)
