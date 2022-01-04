//Query the containers  
const container = document.querySelector('.container')

//Create calculator display
const display = document.createElement('div')
display.classList.add('display')
display.innerText = 0;
container.appendChild(display)

//create clear button
const clear = document.createElement('div')
clear.classList.add('clear')
clear.innerText = 'CLEAR'
container.appendChild(clear)

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
decimal.innerText = '.'
container.appendChild(decimal)



// A list of operators
const operators = ['/', 'x', '-','+', '=']

// create element for each operator and append to the calculator

for(i=0;i<operators.length;i++){
    const operator = document.createElement('div')
    operator.classList.add('operator')
    operator.classList.add(`operator${[i]}`)

    operator.innerText = `${operators[i]}`
    container.appendChild(operator)
}
