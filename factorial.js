/**
 * Write a recursive function that finds the factorial of a given number. 
 * 
 * The factorial of a number can be found by multiplying that number by each number between itself and 1. 
 * 
 * For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
 */

//result = n * (n - 1);

const factorial = (number, result = 1) => {
    //base case
    if(number === 1) {
        return console.log(result)
    }

    result *= number;

    return factorial(number - 1, result);
}

factorial(5)