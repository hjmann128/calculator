//Functions for various math operations 

//Add 

function add(num1, num2) {
return num1 + num2; 
}

//Subtract 

function subtract(num1, num2) {
    return num1 - num2; 
}

//multiply 

function multiply(num1, num2) {
    return num1 * num2;
}

//divide

function divide(num1, num2) {
    return num1 / num2;
}

//calc basic function 

function operate(num1, op , num2) {
    if( op === "+"){
        return add(num1, num2)
    } else if (op === "-"){
        return subtract(num1, num2);
    } else if (op === "*") {
        return multiply(num1, num2);
    }else if (op === "/"){
        return divide(num1, num2);
    }
}

//Display 
const displayDiv = document.querySelector('.display')

const display = [1234];

displayDiv.textContent = display; 

