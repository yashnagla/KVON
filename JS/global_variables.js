let user = 'Yash';

function greet(u){
    let num = 5; // Let is used to define local variable.
    console.log(user);
    return `Hello ${u}!`;
}

let str = greet(user);
console.log(str);


function add(num1, num2, num3){ // num1, num2 and num3 are the parameters of the function.
    console.log(num1, num2, num3)
    return num1+num2+num3;
}

console.log(add(5, 6, 7)); // 5, 6 and 7 are the arguments of the function.
console.log(add(5, 6));