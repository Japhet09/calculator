//Query the containers  
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
cancel.innerText = 'C'
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
decimal.classList.add('number')
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

function operatorFunc(number1, operator, number2){
    

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


//state variables
let firstNumber = ''
let currentNumber= ''
let currentOperator = ''
let result = ''

//

//select all numbers 
const numbers = document.querySelectorAll('.number')

//set event listener for each number and update screen display
    for(let number of numbers){
        number.addEventListener('click', event=>{
            display.innerText = (display.innerText + event.target.innerText)
            console.log(event.target.innerText)
    
        })
        
    }

    //event listener on decimal
    decimal.addEventListener('click',handler=function(event){
        if (display.innerText.includes(event.target.innerText)){
            this.removeEventListener('click',handler)
        }
       
    })



//select all operators and assign event listener
const allOperators = document.querySelectorAll('.operator')
for(let operator of allOperators){
    operator.addEventListener('click',event=>{
       
        currentOperator = event.target.innerText
        if(firstNumber===''||currentOperator===''){
            firstNumber = Number(display.innerText)
            console.log('me')
            if(firstNumber&&currentOperator){
                display.innerText = 0
                console.log( 'ififif')
            }
        }
    })
}

//sset event listener on equal sign
equalSign.addEventListener('click',event=>{
    currentNumber = Number(display.innerText)
    console.log('current number')
    result = operatorFunc(firstNumber,currentOperator,currentNumber)
    console.log(result)
    display.innerText = result
    firstNumber = ''
    currentNumber = ''
    currentOperator = ''
    
})

clear.addEventListener('click',function (){
    display.innerText = 0
    currentNumber = ''
    firstNumber = ''
    currentOperator = ''
    result = ''
})

cancel.addEventListener('click',()=>{
    if((display.innerText).length===1){
        display.innerText = 0
    }else{
        display.innerText = display.innerText.slice(0,-1)
    }
})
