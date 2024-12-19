// Conditional Statement :- Conditional statements are programming constructs that execute specific code blocks based on whether a given condition evaluates to true or false, enabling decision-making in code.

// if-else conditional statement
let num1 = 6;
let num2 = 4;
let num3 = 7;

if(num1 > num2 && num1 > num3) {
    console.log(num1 + " is greater than " + num2 + ", " + num3);
}
else if(num2 > num1 && num2 > num3) {
    console.log(num2 + " is greater than " + num1 + ", " + num3);
}
else{
    console.log(num3 + " is greater than " + num1 + ", " + num2);
}
console.log("Thank You")


// Even or Odd
let num = 23;

let result;

if(num%2 == 0){
    result = "Even";
    console.log(result);
}
else{
    result = "Odd";
    console.log(result);
}

// Even or Odd using Ternary Operator '?:'
result = num % 2 == 0 ? "Even" : "Odd";
console.log(result)
console.log(num % 2 == 0 ? "Even" : "Odd")

