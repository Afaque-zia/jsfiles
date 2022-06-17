var number = Number(prompt("Enter Number"));

alert(checkNumber(number));

function checkNumber(num) {
    if(num % 2 == 0){
        return "The Number is Even";
    }else{
        return "The Number is Odd";
    }
}