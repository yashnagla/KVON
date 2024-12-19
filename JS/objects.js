let input = 'workExp';
let objects = {
    firstName : 'Yash',
    tech: 'JS',
    age: 25,
    'workExp': 1
}

console.log(typeof objects);
console.log(objects.firstName);
console.log(objects['tech']);
console.log(objects.age);

console.log(objects[input])


// Oject Litreal
let alien = {
    firstName : 'Yash',
    tech: 'JS',
    laptop : {
        cpu : 'i7',
        ram : 16,
        brand1 : 'Asus'
    }
}
console.log(alien.laptop.brand.length);
console.log(alien.laptop.brand?.length);

// Delete Property
delete alien.laptop
console.log(alien)