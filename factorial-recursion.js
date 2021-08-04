/*
0! = 1
1! = 1
2! = 2 X 1
3! = 3 X 2 X 1
4! = 4 X 3 X 2 X 1
5! = 5 X 4 X 3 X 2 X 1
6! = 6 X 5 X 4 X 3 X 2 X 1
7! = 7 X 6 X 5 X 4 X 3 X 2 X 1
8! = 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1
9! = 9 X 8 X 7 X 6 X 5 X 4 X 3 X 2 X 1
n! = n * (n-1)!
*/

function getFactorial(n){
    factorial = 1;
    if(n == 0 || n == 1){
        return factorial;
    }
    else{
        factorial = n * getFactorial(n - 1);
    }
    return factorial;
}

function main(){
    // const prompt = require("prompt-sync")({ sigint: true });
    // let myNumber = prompt("Please Enter a Number: ");
    let myNumber = 6;
    let myFactorial = getFactorial(myNumber);
    
    console.log("The factorial of " + myNumber + " is " + myFactorial);
}

main();