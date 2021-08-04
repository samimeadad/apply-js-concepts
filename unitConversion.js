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
    let myInches = 156;
    let myFeet = inchToFeet(myInches);
    console.log(myFeet);

    let dadiInches = 1440;
    let dadiFeet = inchToFeet(dadiInches);
    console.log(dadiFeet);

    let marathon = mileToKilometer(26.2);
    console.log(marathon);
}

main();