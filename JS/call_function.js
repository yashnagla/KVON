let fullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

let name1 = {
    firstName : "Yash",
    lastName : "Nagla",
}
fullName.call(this.name1, "Jaipur", "Rajasthan");

let name2 = {
    firstName:"Harsh",
    lastName:"Jaiswal",
}

fullName.apply(this.name2, ["Jaipur", "Rajasthan"]);