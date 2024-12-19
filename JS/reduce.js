// Reduce method performs some operations and reduces the array to a single value. It returns that single value.
// let result = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let initialValue = 0;
let sumWithInitial = nums.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
})
console.log(sumWithInitial);

let largestOfArr = [12, 32, 50, 36, 55];
let largestInArr = largestOfArr.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
});
console.log(largestInArr)