// forEach Loop in Arrays
// arr.forEach( callBackFunction )
// CallbackFunction : Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.

let arr = [1,2,3,4,5,6];

arr.forEach(function printVal(val){ // Value for each index
    console.log(val);
})

// Arrow Function
arr.forEach((val) => {
    console.log(val)
})

let arrStr = ["Delhi", "Jaipur", "Mumbai"];

arrStr.forEach((strArr, idx) => {
    console.log(strArr.toUpperCase(), idx);
})

arr.forEach((arr, idx) => {
    console.log(idx, arr ** 2);
});

