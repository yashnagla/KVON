const num = 400;
console.log(num)

var balance = new Number(100)
console.log(balance)

console.log(balance.toString())

// .length :- It is used to find the length of an String.
console.log(balance.toString().length)

// .toFixed() :- It is used to fix the number of decimal places in a number.
console.log(balance.toFixed(2))


const otherNum = 23.8966;
// .toPrecision() :- It is used to fix the number of significant digits in a number and round it to the nearest number with that many significant digits.
console.log(otherNum.toPrecision(3))


const hund = 1000000000000;
// .toLocaleString() :- It is used to convert a number into a string, with locale-dependent interpretation of the number.
console.log(hund.toLocaleString())