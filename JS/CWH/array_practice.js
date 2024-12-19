// // Q1
// var arr = [1,2,3,4,5,6,7]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(a)
// console.log(arr)

// Q2
// var arr = [1,2,3,4,5,6,7]
// let a;
// do{
//     a = prompt("Enter a number");
//     a = Number.parseInt(a);
//     arr.push(a);
//     console.log(arr)
// } while(a != 0);
// console.log(arr)

// Q3
// var arr = [1,20,3,4,5,60,70]
// let fil = arr.filter((x) => {
//     return x%10==0;
// })
// console.log(fil)
    
// Q4
// var arr = [1,2,3,4,5,6, 7,8,9,10]
// let sq = arr.map((x) => {
//     return x**2;
// })
// console.log(sq)
    
// Q5
var arr = [1,2,3,4,5]
let n = arr.reduce((x1,x2) => {
    return x1*x2;
})
console.log(n)