function greet(){ // Defining Function
    console.log();
    return "Hello, World!";
}

greet() // Function Calling

// Function Return and Parameters

// Return
let str = greet();
console.log(str)

function hello(user){
    return `Hello ${user}`;
}
let user = 'Yash';
let str1 = hello(user);
console.log(str1)

// Function Expression
let add = function(num1, num2){  // Anonomus function is assigned to an variable
    return num1 + num2;
}

let result = add(5, 6);
console.log(result)