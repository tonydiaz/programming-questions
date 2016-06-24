// String maniputlation in JS

//Reverse the order of a String
console.log("Reverse the order of words in a string");
var currentStr = "Hello, my name is Tony.";
console.log()
var reverseStr = currentStr.split(' ').reverse().join(' ');
console.log("Simple Implementation");
console.log("Current String: ", currentStr);
console.log("Reversed String: ", reverseStr);


// ======================================
console.log("Manual Implementation");
var word = '', arr = [], reverse = '';
var arrIndex = 0;
//Grab the words an place in an array.
for (i = 0; i <= currentStr.length; i++) {
    //Get the word
    if(i === currentStr.length) {
        arr[arrIndex] = word;
    }
    else if (currentStr[i] !== ' ' || i === currentStr.length-1) {
        word = word + currentStr[i];
        console.log(word);
    }
    else {
        arr[arrIndex] = word;
        arrIndex++;
        word = '';
    }
}
console.log("Array", arr);
console.log("Array Index", arrIndex);
for (i=arrIndex; i>=0; i--) {
    var tempWord = arr[i];
    reverse = reverse + tempWord + " ";
}
console.log("Reverse word: ", reverse);
