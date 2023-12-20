//variables

let numeroAleatorio;
let botonComprobar = document.querySelector('.section__button')
let botonLimpiar = document.querySelector('.borrarDatos')
let resultado = document.querySelector('#resultado')
let estadisticas = document.querySelector('#estadisticas')
let exitosos = localStorage.getItem('numeroUsuario') || 0
let fallidos = localStorage.getItem('numeroUsuario') || 0