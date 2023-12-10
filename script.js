// program to check if a number is positive, negative or zero.

function checkNumber (num){
    if (num > 0){
        return `${num} is a positive number.`;
    }
    else if (num < 0){
        return `${num} is a negative number.`;
    }
    else {
        return `${num} The number is zero.`; 
    }
   
    }
    console.log (checkNumber(num));
