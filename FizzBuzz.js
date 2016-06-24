function FizzBuzz (i) {
    if(i%3 === 0 && i%5 === 0) {
        return "FizzBuzz";
    } else if (i%5 === 0){
        return "Buzz";
    } else if (i%3 === 0) {
        return "Fizz";
    } else {
        return i;
    }
}

function FizzBuzzTest() {
    if(FizzBuzz(3) === "Fizz" ) {
        console.log("FizzBuzz(3) - Test Passed");
    } else {
        console.log("FizzBuzz(3) - Test Failed");
    }

    if(FizzBuzz(5) === "Buzz" ) {
        console.log("FizzBuzz(5) - Test Passed");
    } else {
        console.log("FizzBuzz(5) - Test Failed");
    }

    if(FizzBuzz(90) === "FizzBuzz" ) {
        console.log("FizzBuzz(5) - Test Passed");
    } else {
        console.log("FizzBuzz(5) - Test Failed");
    }
}

for(var i=0; i<=100; i++) {
    console.log(FizzBuzz(i));
}

FizzBuzzTest();
