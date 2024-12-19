// Switch Statement :- A switch statement is a control structure that executes code based on the value of a variable or expression.

let day = "Monday";
console.log("Without break")
switch(day){
    case 'Monday':console.log("Today is Monday");
    case 'Tuesday':console.log("Today is Tuesday");
    case 'Wednesday':console.log("Today is Wednesday");
    case 'Thrusday':console.log("Today is Thrusday");
    case 'Friday':console.log("Today is Friday");
    case 'Saturday':console.log("Today is Saturday");
    case 'Sunday':console.log("Today is Sunday");
    break;
}
console.log("With break")
switch(day){
    case 'Monday':console.log("Today is Monday"); break;
    case 'Tuesday':console.log("Today is Tuesday"); break;
    case 'Wednesday':console.log("Today is Wednesday"); break;
    case 'Thrusday':console.log("Today is Thrusday"); break;
    case 'Friday':console.log("Today is Friday"); break;
    case 'Saturday':console.log("Today is Saturday"); break;
    case 'Sunday':console.log("Today is Sunday"); break;
}