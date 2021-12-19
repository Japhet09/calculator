const addition = function(firstNumber,secondNumber){
    return firstNumber + secondNumber
}

const substraction= function(firstNumber,secondNumber){
    return firstNumber - secondNumber
}

const multiplication = function(firstNumber,secondNumber){
    return firstNumber * secondNumber
}

const division = function(firstNumber,secondNumber){
    return firstNumber / secondNumber
}

const operate = function(firstNumber,operator,secondNumber){
    if(operator === '+'){
         return addition(firstNumber,secondNumber)
    }else if(operator==='-'){
        return substraction(firstNumber,secondNumber)
    }else if(operator==='*'){
        return multiplication(firstNumber,secondNumber)
    }else if(operator==='/'){
        return division(firstNumber,secondNumber)
    }
}


const buttons = document.querySelectorAll('.number')
const display = document.querySelector('.display')
const operators = document.querySelectorAll('.operator')
const clear = document.querySelector('.clear')
const solution = document.querySelector('.solution')

let firstNumber = 0
let secondNumber = 0

buttons.forEach(button => {
   button.addEventListener('click',function(event){
    display.innerText += event.target.innerText 
       firstNumber = parseInt (display.innerText)


       
       console.log( typeof firstNumber)
       //display.innerText = button
   })
    
});


let answer = 0
operators.forEach(operator => {
    operator.addEventListener('click',(event)=>{
        operator = event.target.innerText
        answer = operate(firstNumber,operator,firstNumber)

    })

    
}); 
solution.addEventListener('click',()=>{
    display.innerText = answer


})









clear.addEventListener('click',function(){
    display.innerText = 0 
    firstNumber = 0


})
