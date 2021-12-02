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

let display = [1234];


selectedNum = [];
//buttons 
const addBtn = document.querySelector('.add')
const subBtn = document.querySelector('.subtract')
const multiBtn = document.querySelector('.multi')
const divideBtn = document.querySelector('.divide')



const Btn = document.querySelectorAll('.btn')
const operand = document.querySelectorAll('.operand')
const clear = document.querySelector('.clearbtn');
let currentNum = ''
let previousNum = ''
let currentOperand = ''

function updateDisplay (num1) {
 displayDiv.innerText += num1
}

function secondNumber (){
let first = displayDiv.innerText;
displayDiv.innerText = ''
console.log(first)
}

function updateOperand (operand){
    currentOperand = operand; 
    secondNumber()
    console.log(operand)
}


//Selectors and event listeners 



Btn.forEach(button => {
    button.addEventListener('click', () => {
        if(!currentOperand){
            currentNum = button.innerText;
            updateDisplay(currentNum)
            console.log(displayDiv)
        }else {
            previousNum = currentNum;
            currentNum = button.innerText;
            console.log(previousNum);
            updateDisplay(currentNum)
           
        }
       
        
    })
})

operand.forEach(button => {
    button.addEventListener('click', () => {
        updateOperand(button.innerText)
    })
})

clear.addEventListener('click', () => {
    displayDiv.innerText = '';
})





