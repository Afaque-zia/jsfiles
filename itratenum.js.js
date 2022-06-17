var newVal= [];
checkFizzBuzz();  

function checkFizzBuzz() {
    var itrate = 0;
    while(itrate < 100){
        if(itrate % 3 == 0){
            newVal.push("fizz");
        }else if(itrate % 5 == 0){
            newVal.push("Buzz");
        }else if(itrate % 3 == 0 && itrate % 5 == 0){
            newVal.push("Fizz Buzz");
        }else{
            newVal.push(toString(itrate));
        }
        itrate++;
    }

    console.log(newVal);

}

