let alien = {
    firstName : 'Yash',
    tech: 'JS',
    laptop : {
        cpu : 'i7',
        ram : 16,
        brand1 : 'Asus'
    }
}

for(let key in alien){
    console.log(key, alien[key]);
}

for (let property in alien.laptop) {
    console.log( alien.laptop[property]);
}