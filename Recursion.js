// Recursion in JS
// ===============

function factorial (num) {
    if (num > 1) {
        return factorial(num-1) * num;
    } else {
        return 1;
    }
}

console.log("Manual Recursion")
console.log(factorial(4));
