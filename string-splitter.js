/**
 * Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
 * 
 * Don't use JS array's split function to solve this problem.
 * 
 * Input: 02/20/2020
 * 
 * Output: ["02", "20", "2020"] 
 */


 const stringSplitter = (string, separator, result = []) => {
    
    if(string.length === 0) {
        return console.log(result)
    }

    const separatorIndex = string.indexOf(separator);

    const stringSection = (separatorIndex !== -1) ? string.substring(0, separatorIndex) : string.substring(0, string.length);

    result.push(stringSection);
    
    newString = (separatorIndex !== -1) ? string.slice(separatorIndex + 1) : '';
    
    return stringSplitter(newString, separator, result);
    
 }

 stringSplitter('this/is/a/good/question/for/you', '/')