/**
 * Write a recursive function that prints the Fibonacci sequence of a given number. 
 * 
 * The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers
 * 
 * For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.
 */


 const fibonacci = (number, position = 1, result = []) => {
    if(number === position - 1) {
        return console.log(result);
    }
    
    const value = (position <= 2) ? 1 : result[position - 2] + result[position - 3];
        
    result.push(value);
    
    return fibonacci(number, position + 1, result);

 }

 fibonacci(7)