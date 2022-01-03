//Query the containers  
const container = document.querySelector('.container')

//Create calculator display
const display = document.createElement('div')
display.classList.add('display')
display.innerText = 0;
container.appendChild(display)

//Create calculator numbers
for(i=9;i>=0;i--){
    const num= document.createElement('div')
    num.classList.add('number')
    num.innerText = `${i}`
    container.appendChild(num)
}
