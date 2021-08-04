function getFactorial(number){
    let i = number;
    let factorial = 1
    if(number == 0){
        return factorial;
    }
    else{
        while(i >= 1){
            factorial *= i;
            i--;
        }
    }
    return factorial;
}

function main(){
    let myNumber = 0;
    let myFactorial = 0;
    const prompt = require("prompt-sync")({ sigint: true });
    myNumber = prompt("Enter a Number: ");
    myFactorial = getFactorial(myNumber);
    console.log("The factorial of " + myNumber + " is " + myFactorial);
}

main();