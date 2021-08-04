let number = 0;
let factorial = 1;
let i = 0;

const prompt = require("prompt-sync")({ sigint: true });
number = prompt("Enter a Number: ");

if(number == 0){
    console.log("The factorial of " + number + " is " + 1);
}
else{
    i = number;
    while(i >= 1){
        factorial *= i;
        i--;
    }
    console.log("The factorial of " + number + " is " + factorial);
}

