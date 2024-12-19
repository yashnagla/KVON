// This Keyword

let laptop1 = {
    cpu: 'i7',
    ram: 16,
    brand:'hp',

    getConfig: function(){
        let storage = 100
        console. log(storage);
        console. log(laptop1.cpu);
        console. log(this.cpu);
    }
}
let laptop2 = {
    cpu: 'i3',
    ram: 25,
    brand:'asus ',
    getConfig: function(){
        let storage = 100
        console. log(storage);
        console. log(laptop2.cpu);
        console. log(this.cpu);
    }
}
laptop1. getConfig();
laptop2. getConfig();

function getFastLaptop(laptop1, laptop2){
    if(laptop1.cpu > laptop2.cpu){
        console.log(laptop1);
    }else{
        console.log(laptop2);
    }
}

getFastLaptop(laptop1, laptop2)