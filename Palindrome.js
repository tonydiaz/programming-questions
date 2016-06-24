function PalindromeTest(value) {
    if(Palindrome(value) === true) {
        return "Test Passed";
    } else {
        return "Test Failed";
    }
}

function Palindrome(value){
    var newStr = value.replace(/[^a-z0-9+]+/gi, '').toLowerCase().split('').reverse().join('');

    //Base case
    if (value.replace(/[^a-z0-9+]+/gi, '').toLowerCase().split('').join('') === newStr) {
        return true;
    } else {
        return false;
    }
}

console.log("noon: ", Palindrome("noon"));
console.log("Radar: ", Palindrome("Radar"));
console.log("Nurses run!: ", Palindrome("Nurses run!"));

console.log("Test - hello: ", PalindromeTest("hello"));
console.log("Test - lool: ", PalindromeTest("lool"));
