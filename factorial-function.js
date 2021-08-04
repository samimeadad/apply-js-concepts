function factorial(number){
    let result = 1;
    if(number == 0){
        return 1;
    }
    else{
        for(let i = number; i >= 1; i--){
            result *= i;
        }
    }
    return result;
}

function main(){
    const prompt = require("prompt-sync")({ sigint: true });
    let myNumber = prompt("Please Enter a Number: ");
    // let myNumber = 5;
    let myFactorial = factorial(myNumber);
    console.log("The factorial of " + myNumber + " is " + myFactorial);
}

main();