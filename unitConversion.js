//Inches to Feet
function inchToFeet(inches){
    let feet = inches / 12;
    return feet;
}

//Miles to Kilometers
function mileToKilometer(miles){
    return miles * 1.60934;
}


//main function
function main(){
    const ps = require("prompt-sync");
    const prompt = ps({ sigint: true });

    let myInches = prompt("Enter your height in inches: ");
    let myFeet = inchToFeet(myInches);
    
    console.log(myFeet + " feet");

    let marathon = mileToKilometer(26.2);
    console.log("Marathon length in kilometeres: ", marathon);
}

main();