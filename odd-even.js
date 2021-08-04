function isOdd(num){
    if(num % 2 != 0){
        return true;
    }
    else{
        return false;
    }
}

function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function main(){
    // taking the user input from console
    const ps = require("prompt-sync");
    const prompt = ps({ sigint: true });

    //variable declaration
    let n = prompt("Enter the number: ");
    let isMyNumberEven = isEven(n);
    console.log("Is my number even: ", isMyNumberEven);

    // //Odd-Even check with conditional statements
    // if(isEven(n) == true){
    //     console.log("The number is Even");
    // }
    // else{
    //     console.log("The number is Odd");
    // }
}

main();