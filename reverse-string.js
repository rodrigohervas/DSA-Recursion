/**
 * Write a function that reverses a string. 
 * 
 * Take a string as input, 
 * 
 * reverse the string, and 
 * 
 * return the new string.
 * 
 */

 const reverseString = (string, result = []) => {
    
    if(string.length === 0) {
        return console.log(parseArrayToString(result));
    }

    const strArray = string.split('');

    const lastLetter = strArray.pop();

    result.push(lastLetter);
    
    const newString = parseArrayToString(strArray)

    return reverseString(newString, result)
}

const parseArrayToString = (array) => {
    let parsedString = '';
    array.filter(ltr => {
        if(ltr !== ',') {
            parsedString += ltr;
        }
    })
    return parsedString;
}

reverseString('emoh')

