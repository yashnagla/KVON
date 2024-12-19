// Normal Function
let greet = function(){
    console.log("Hello, World!");
    return 1;
}
greet();
console.log(greet());

// Arrow Function
let greet1 = (user) => {
    console.log(`Hello ${user}`);
    return 1;
}
greet1('Anant');
console.log(greet1('Yash'));

// ShortHand for Arrow Function
let add = (num1, num2) => num1+num2;
console.log(add(2, 4))