//77´//* CALCULATOR INTERFACE////////
 const container = document.querySelector('.container')

//Create calculator display
const display = document.createElement('div')
display.classList.add('display')
display.innerText = '0';
container.appendChild(display)

//create clear button
const clear = document.createElement('div')
clear.classList.add('clear')
clear.innerText = 'AC'
container.appendChild(clear)


//Create a delete button
const cancel = document.createElement('div')
cancel.classList.add('cancel')
cancel.innerText = 'D'
container.appendChild(cancel)

//Create a % element
const percent = document.createElement('div')
percent.classList.add('percent')
percent.innerText = '%'
container.appendChild(percent)

//Create calculator numbers
for(i=9;i>=0;i--){
    const num= document.createElement('div')
    num.classList.add('number')
    num.classList.add(`number${i}`)
    num.innerText = `${i}`
    container.appendChild(num)
}
//Create decimal point  
const decimal = document.createElement('div')
decimal.classList.add('decimal')
//decimal.classList.add('number')
decimal.innerText = '.'
container.appendChild(decimal)



// A list of operators
const operators = ['/', 'x', '-','+']

// create element for each operator and append to the calculator

for(i=0;i<operators.length;i++){
    const operator = document.createElement('div')
    operator.classList.add('operator')
    operator.classList.add(`operator${[i]}`)

    operator.innerText = `${operators[i]}`
    container.appendChild(operator)
}
//add equal sign
const equalSign = document.createElement('div')
equalSign.classList.add('equal', 'operator4')
equalSign.innerText = '='
container.appendChild(equalSign)

//add function: add two numbers
function add(number1,number2){
    return number1 + number2
}

//substract two numbers
function substract(number1,number2){
    return number1 - number2
}

// multiply two numbers
function multiply(number1,number2){
    return number1 * number2
}

//divide two numbers
function divide(number1,number2){
    return number1 / number2
}

//operator function, can call any of the above function dependin on operator

function operate(number1, operator, number2){
    

    switch(operator){
        case '/':
            return divide(number1,number2);
            break;
        case 'x':
            return multiply(number1,number2);
            break;
        case '-':
            return substract(number1,number2);
            break;
        case '+':
            return add(number1,number2);
            break;
    }
    
}

//* CALCULATOR OPERATIONS //

//state variables
//let containDecimal = false;
let storedNumber = '' ;
let currentNumber = ''
let currentOperator = '';
let displayValue = '';
let result = null;
//let finalOperator = ''


//select all numbers and add event listener
const numbers = document.querySelectorAll('.number')

for(let number of numbers){
    number.addEventListener('click', numbersFunc)
    
}

//select all operators & add event listener
const allOperators = document.querySelectorAll('.operator')

for(let operator of allOperators){
    operator.addEventListener('click',operatorFunc)
}


equalSign.addEventListener('click', mathOperation)

clear.addEventListener('click',clearFunc)

cancel.addEventListener('click',deleteFunc)

decimal.addEventListener('click',decimalPoint)

//Function when opeerators are clicked
function operatorFunc(){  
    if(!storedNumber){
        console.log('NO')
        storedNumber = displayValue
        //currentOperator = (this.innerText)
        //display.innerText = 0
    }else if(storedNumber&&currentOperator&&currentNumber){
        result = mathOperation()
        console.log('answer')
    }
    currentOperator = (this.innerText)
    display.innerText = 0
    console.log('lasr')
}
//function when numbers are clicked
function numbersFunc(){
    displayValue = display.innerText + this.innerText
    display.innerText = Number(displayValue)

    if(currentOperator){
        currentNumber = display.innerText
        console.log('yes')
    }      
}

//Restric up to 15 gits

function maxDigits(digits){
    digits = display.innerText
    if(digits.length>15){
    return deleteFunc()
    }
}
///Restrict to only one decimal value in a number
function decimalPoint(){
    if(display.innerText.includes('.')){
        return
    }
    display.innerText += this.innerText
}

///perform the operation
function mathOperation(){
    if(!storedNumber||!currentNumber||!currentOperator)return 
    //finalOperator = console.log(this.innerText)
    result = operate(Number(storedNumber),currentOperator,Number(currentNumber))
    display.innerText = result
    storedNumber = result
    currentNumber = ''
    return result
}
//reset everything
function clearFunc(){
    display.innerText = 0
    currentNumber = ''
    storedNumber = ''
    currentOperator = ''
    result = null
    finalOperator = ''
}

//Delete last entry
function deleteFunc(){
    if((display.innerText).length===1){
        display.innerText = 0
    }else{
        display.innerText = display.innerText.slice(0,-1)
    }
}