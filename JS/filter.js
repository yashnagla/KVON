// Filter methos creates a new array of elements that give true for a condition/filter.

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,1,14,15,16,17,18,19,20]

let newArrOdd = nums.filter((val) => {
    return val % 2 !== 0;
})
console.log(newArrOdd)

let newArrEven = nums.filter((val) => {
    return val % 2 === 0;
})
console.log(newArrEven)

let greaterThenThree = nums.filter((val) => {
    return val>3;
})
console.log(greaterThenThree)