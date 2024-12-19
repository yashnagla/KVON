// for loop
let sum = 1;
// let n = prompt("Enter the value of n :- ");
// n = Number.parseInt(n)
let n = 10;
for(let i = 1; i <= n; i++){
    sum *= i;
    console.log((i+1), "+")
}
console.log(`Sum of first ${n} numbers is ${sum}.`)

// for-in loop
let obj = {
    yash : 56,
    nipun : 69,
    harsh : 96,
    nakul : 99,
    pulc : 66,
}

for(let a in obj){
    console.log("Marsk of " + a + " are " + obj[a])
}


// while loop
