let userNumber = parseInt.prompt("Type a number from 1 to 100");


for (let i = 0; i <= 100; i = i + 1){

    if ((userNumber % 3 === 0) && (userName % 5 == 0)) {
        console.log("FizzBuzz");
    }

    else if( userNumber % 3 === 0){
        console.log("Fizz");
    }

    else if (userNumber % 5 === 0){
        console.log("Buzz");
    }

    else {
        console.log(userNumber);
    }
}