function isLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}

function main(){
    const prompt = require("prompt-sync")({ sigint: true });

    let myYear = prompt("Please input year to check: ");
    let checkLeapYear = isLeapYear(myYear);
    console.log(myYear, "is Leap Year:", checkLeapYear);
}

main();