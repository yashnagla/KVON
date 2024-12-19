// Map creates a new array with the results of some operation. The value its callback returns are used to form new array.

let nums = [67, 52, 39];

nums.map((val) => {
    console.log(val);
})

let newArr = nums.map((val) => {
    return val+q;
})
console.log(newArr)