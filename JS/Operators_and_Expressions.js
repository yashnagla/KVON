// Operators and Expressions

// Expression :- A fragment of code that produces a value is called an expression. Every value written literally is an expression. For example :- 77 or "Hello".

// Operators

// Arthmetic Operation
let a = 10;
let b = 2;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a ** b = ", a**b);
console.log("a % b = ", a%b);
console.log("a ++ = ", a++);
console.log("b -- = ", b--);

// Bitwise Operator
// Left Shift Operator (<<) :- It shifts the bits of the number to the left and fills 0
console.log(5 << 1)
console.log(5 << 2)

// Right Shift Operator (>>) :- It shifts the bits of the number to the right and fills 0 on
console.log(5 >> 1)
console.log(5 >> 2)

// Bitwise Right Shift with Zero (>>>) :- This operator is very similar to the right shift operator. It always fills the left bits with zero without worrying about the sign of the bit.
console.log(5 >>> 3)

// OR Assignment Operator (|=) :- This operator performs bitwise OR operation on the operands and assigns the result to the left operand (variable)
let x = 7; 
console.log(x |= 5);

// XOR Assignment Operator (^=) :- This operator performs bitwise XOR operation on the operands and assigns the result to the left operand (variable)

// let x = 7;
console.log(x ^= 5);


// Conditional Operator
var num1 = 67;
var num2 = 90;
var res = num1 > num2 ? "num1 is greater than num2" : "num2 is greater than num1";
console.log(res)

let str1 = "Hello"
let str2 = "World!"
console.log("hey",str1+str2);