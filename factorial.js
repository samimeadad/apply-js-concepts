let n = 0;
let factorial = 1;
let i = 0;

const prompt = require("prompt-sync")({ sigint: true });
n = prompt("Enter a number for which you wanna know the factorial value: ");

if(n == 0){
    console.log("The factorial of " + n + " is " + 1);
}
else{
    for(i = 1; i <= n; i++){
        factorial *= i;
    }
    console.log("The factorial of " + n + " is " + factorial);
}