'use strict';

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-input');
const message = document.querySelector('.js-message');
const counter = document.querySelector('.js-counter');
let accumulator = 0;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function rules(){
    let inputValue = inputNumber.value;
    if (inputValue < 0 || inputValue > 100 || inputValue % 1 !== 0){
        message.innerHTML = `El número tiene que estar entre 0 y 100.`
    }else if (inputValue > randomNumber){
        message.innerHTML = `Demasiado alto.`
    }else if (inputValue < randomNumber){
        message.innerHTML = `Demasiado bajo.`
    }else if (inputValue = randomNumber){
        message.innerHTML = `Has ganado, campeona!!!!!!`
    }
}

function counterInt(){
    accumulator = accumulator += +1;
    counter.innerHTML = `Número de intentos: ${accumulator}`;

}

function handleRandom(event){
    event.preventDefault();
   rules();
   counterInt();
}


button.addEventListener('click', handleRandom);