// Q1
var marks = {
    yash : 17,
    nipun : 9.5,
    harsh : 9,
    nakul : 9,
}

for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("Marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
};

// // Q2
for(let key in marks){
    console.log("Makes of " + key + " is " + marks[key]);
};

// Q3
let cn = 43;
let i;
while(i != cn){
    console.log("Try Again")
    i = prompt("Enter a number ")
}
console.log("You have entered correct number.")


// Q4
function mean(a,b,c,d,e){
    console.log((a + b + c + d + e) / 5);
}mean(1,2,3,4,5)