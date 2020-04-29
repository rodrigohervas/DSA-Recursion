/**
 * Write a function called powerCalculator() that takes two parameters, 
 * 1. an integer as a base, and 
 * 2. another integer as an exponent. 
 * 
 * The function returns the value of the base raised to the power of the exponent. 
 * 
 * Use only exponents greater than or equal to 0 (positive numbers)
 * 
 * powerCalculator(10,2) should return 100
 * powerCalculator(10,-2) should return exponent should be >= 0
 */

const powerCalculator = (base, power, total = 1) => {

    if(power === 0) {
        return console.log(total);
    }

    total *= base;

    return powerCalculator(base, power - 1, total);
}

powerCalculator(2, 4)