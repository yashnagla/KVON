// Type Conversion

// Explicit Conversion
let num = 6;
console.log(num, typeof num)

let num1 = String (6)
console.log(num1, typeof num1)

// Unary Operators
num = +num + 2
console.log(num)

// Coercion Conversion
let x
console.log(x, typeof x)

x = 8
console.log(x, typeof x)

x = x + ""
console.log(x, typeof x)

x = x - 2
console.log(x, typeof x)

// Boolean
x = !x
console.log(x, typeof x)

// Falsy Values :- Falsy values are values that evaluate to false when used in a boolean context. The following values are considered falsy in JavaScript: false, 0, "" or '', null, undefined, NaN
// Truthy Values :- Truthy values are values that evaluate to true in a boolean context. Almost all values are truthy except for the falsy values listed above.
console.log(Boolean(7))
console.log(Boolean(-7))
console.log(Boolean(0))
console.log(Boolean("Hi"))

// parseInt
// parseInt() function parses a string and returns an integer. If the string cannot be parsed into an integer, it returns NaN.
let y = parseInt("123 Hi")
console.log(y)