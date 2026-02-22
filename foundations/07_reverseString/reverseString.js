const reverseString = function(input) {
    let output = "";
    for (let index = input.length-1; index >= 0; index--) {   
           output += input[index];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
