// Method/Function inside an object is known as Object Method

let laptop = {
    brand : 'Asus',
    cpu : 'i9',
    ram : '16gb',

    greet: function(){
        console.log('Hello World!')
    }
}

laptop.greet();