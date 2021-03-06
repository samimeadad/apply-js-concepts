function getFactorial(number){
    let factorial = 1;
    if(number == 0){
        return factorial;
    }
    else{
        for(let i = number; i >= 1; i--){
            factorial *= i;
        }
    }
    return factorial;
}

function main(){
    const prompt = require("prompt-sync")({ sigint: true });
    let myNumber = prompt("Please Enter a Number: ");

    let myFactorial = getFactorial(myNumber);
    
    console.log("The factorial of " + myNumber + " is " + myFactorial);
}

main();