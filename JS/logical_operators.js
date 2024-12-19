// Logical Operators :- Logical operators are symbols that connect boolean values, returning true or false based on the logical relationship between them. Logical operators in JavaScript include AND (&&), OR (||), and NOT (!), used to combine or invert boolean values.

let x = 7, y = 8, z = 9;
// And Operator '&&'
console.log(x < y && x < z);
console.log(x < y && x > z);

// OR Operator '||'
console.log(x < y || x < z);
console.log(x < y || x > z);
console.log(x < y || x == z);
console.log(x == y || x == z);

// NOT Operator '!'
let result = x == y || x == z;
n = !result;
console.log(result, n);