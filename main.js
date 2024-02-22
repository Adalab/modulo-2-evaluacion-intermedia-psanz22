'use strict';

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-input');
const message = document.querySelector('.js-message');
const counter = document.querySelector('.js-counter');
let accumulator = 0;

const restartButton = document.querySelector('.js-button-restart');


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
let randomNumber = getRandomNumber(100);
console.log(randomNumber);

function rules(){
    let inputValue = parseInt(inputNumber.value);

    //EN EL INPUT VALUE ME HA FALTADO PONERLE UN PARSEINT() PORQUE RECUERDA QUE LOS VALORES QUE VIENEN DEL HTML SON STRINGS, EN ESTE CASO HA FUNCIONADO PERO EN OTRO TE PUEDE DAR PROBLEMAS!!!!!!!

    if (inputValue < 0 || inputValue > 100 || inputValue % 1 !== 0){
        message.innerHTML = `El número tiene que estar entre 0 y 100.`
    }else if (inputValue > randomNumber){
        message.innerHTML = `Demasiado alto.`
    }else if (inputValue < randomNumber){
        message.innerHTML = `Demasiado bajo.`
    }else if (inputValue === randomNumber){
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


//con esta nueva función manejadora hacemos que con la misma función se cree otro número aleatorio al clickar en el botón volver a empezar. Entonces al darle a volver a empezar ese nuevo número aleatorio es el que va a utilizar para seguir con el juego. Estamos reasignando el valor de la variable randomNumber.

const handleRestart = (event) => {
    event.preventDefault();
    counter.innerHTML = 'Número de intentos: 0';
    message.innerHTML = 'Pista: Escribe el número y dale a Prueba';
    inputNumber.value = '';

//Con estas 3 líneas de código de counter, message e inputNumber reseteamos su valores al clickar en volver a empezar <3


randomNumber = getRandomNumber(100);
console.log(`Prueba: ${randomNumber}`);
}


button.addEventListener('click', handleRandom);
restartButton.addEventListener('click', handleRestart);