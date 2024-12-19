// The difference between function and an constructor is the name of an constructor is in capital and there is no restriction to keep the of function capital

function Alien(name, tech){
    this.name = name;
    this.tech = tech;

    this.work = function(){ // It is an constructor function means function inside the constructor.
        console.log('V r working.');
    }

}

let alien1 = new Alien('Yash', 'JS') // We use new keyword to create an instance of an function
let alien2 = new Alien('Harsh', 'JS')

console.log(alien1)
alien1.tech = 'Python';  // If we change the value of one instance, it will not affect the other instance
console.log(alien1)
console.log(alien2)

alien1.work()