// Map Method
let arr = [45, 23, 21]
var a = arr.map((value, index) => {
    console.log(index, value)
    return value + 1
})
console.log("The map method :- " + a)


// Filter Method
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = arr2.filter((a) => {
    return a < 5;
});
console.log("The filter method :- " + b)
console.log(arr2)

// Reduce Method

let arr3 = [1,1,2,3,4,5,67,5,4,2,2,3,45,56,6];
let c = arr3.reduce((h1,h2) => {
    return h1+h2
});
console.log("The reduce method :- " + c)