//variable
var time = '10:15pm';
var bookPrice = 150;
var isWhite = false;

//array
var partners = ['tasnuva', 'kawsar', 'farmee', 'kutushuna'];
var elementCount = partners.length;
var farmeeIndex = partners.indexOf('farmee');
partners.push('angelica');
partners.pop();
partners.shift();
partners.unshift('tasnuva');


//conditionals
if(bookPrice < 120){
    console.log('I will buy this book');
}
else{
    console.log('Plese give me some discount');    
}

//while loop
var i = 0;
while(i < elementCount){
    console.log(partners[i]);
    i++;
}

for(i = 0; i < elementCount; i++){
    console.log(partners[i]);
}

//function
function isMoonUp(time){
    if(time >= 18 || time <=5){
        return true;
    }
    else{
        return false;
    }
}

function main(){
    var moonUpStatus = isMoonUp(5);
    if(moonUpStatus == true){
        console.log('Moon is Up');
    }
    else{
        console.log('There is no Moon');
    }
}
main();

// value of the variable could change
let price = 25;
price = 28;
price = 31;

//variable will not change
const name = 'Sami Meadad Choudhury';