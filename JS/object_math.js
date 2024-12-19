console.log(Math)

// .abs() :- This method returns the absolute value of the number. If the number is negative, it returns the positive value of the number. If the number is positive, it returns the number itself.
console.log(Math.abs(-123))

// .round() :- This method returns the number rounded to the nearest integer.
console.log(Math.round(2.6287654))
console.log(Math.round(2.2287654))

//  .ceil() :- This method returns the smallest integer that is greater than or equal to the given number.
console.log(Math.ceil(2.4287654))

//  .floor() :- This method returns the largest integer that is less than or equal to the given number.
console.log(Math.floor(2.4287654))

// .min() :- Returns the smallest of zero or more numbers.
console.log(Math.min(1,6,2,9,3,6,0))

// .max() :- Returns the largest of zero or more numbers.
console.log(Math.max(1,6,2,9,3,6,0))

// .random() :- Returns random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random())
console.log((Math.random()*10) + 1) // returns a random number between 1 and 10.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min)) // returns a random number between 10 and 20.

