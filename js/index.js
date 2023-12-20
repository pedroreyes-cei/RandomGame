//VARIABLES
let random;
let button= document.querySelector(`.section__button`);
let result = document.querySelector(`#resultado`);
let statistics = document.querySelector(`#estadisticas`);
let exitoso = localStorage.getItem(`exitosos`)|| `0`;
let fallidos = localStorage.getItem(`fallidos`) || `0`;

//FUNCIONES
function numeroAleatorio(){
    random = Math.round(Math.random()*20);
}


function numeroAñadido(){
    let numero = document.querySelector(`#numeroUsuario`).value
}