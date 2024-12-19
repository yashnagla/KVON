// Push method
let value = [];
console.log(value)
value.push(1)
value.push(2)
value.push(3)
value.push(4)
console.log(value)

// Predefined Values
let values = [5,6,7,8,9,0];
console.log(values.length)
console.log(`Element at index value 0 is ${values[0]}`)
console.log(`Element at index value 1 is ${values[1]}`)
console.log(`Element at index value 2 is ${values[2]}`)
console.log(`Element at index value 3 is ${values[3]}`)
console.log(`Element at index value 4 is ${values[4]}`)
console.log(`Element at index value 5 is ${values[5]}`)

// Data Types in Array
let names = ['Yash', 'Vikas', 'Nillanshu', 'Nipun', 'Harsh']
// names[0] = 'Anant'
names.push('Anant')

console.log(names)
console.log(`Element at index value 0 is ${names[0]}`)
console.log(`Element at index value 1 is ${names[1]}`)
console.log(`Element at index value 2 is ${names[2]}`)
console.log(`Element at index value 3 is ${names[3]}`)
console.log(`Element at index value 4 is ${names[4]}`)
console.log(`Element at index value 5 is ${names[5]}`)

// Multiple Data Types in Array
let data = ['Yash', 5, {texh:'JS'}, function(){console.log('Hello World!')}]
console.log(data);

data[3]();