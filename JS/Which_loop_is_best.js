// Using For loop
// For loop is best when we know starting point, conditional statement and ending point
console.log("For Loop Example :- ")
for(let k=1; k<=100;k++){
    if(k%3 === 0){
        console.log(k)
    }
}

// While loop is best when only conditional statement is known
console.log("While Loop Example :- ")
let num = 564782
while(num>0){
    console.log(num%10);
    num = parseInt(num/10);
}

// do-while loop is same as while loop, the difference is do-while loop first executes the block of code then checks the condition whereas while loop checks the condition first then executes the block of code.
console.log("Do While Loop Example :- ")
let num1 = 564782
do{
    console.log(num1%10);
    num1 = parseInt(num1/10);
}while(num1>0);