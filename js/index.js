//variables

let numeroAleatorio;
let botonComprobar = document.querySelector('.section__button')
let botonLimpiar = document.querySelector('.borrarDatos')
let resultado = document.querySelector('#resultado')
let estadisticas = document.querySelector('#estadisticas')
let exitosos = localStorage.getItem('numeroUsuario') || 0
let fallidos = localStorage.getItem('numeroUsuario') || 0

//funciones

function generarNumero() {
    numeroAleatorio = math.floor(Math.random() * 10)
}

function comprobarNumero(){

    let valorInput = document.querySelector('#numeroUsuario').value
    valorInput = parselnt(valorInput)

    if (valorInput === numeroAleatorio) {
        exitosos++
        localStorage.setItem('exitosos' , exitosos)
        resultado.innerHTML = '¡Muy bien!'
        estadisticas.innerHTML = localStorage.getItem('exitosos', 'fallidos')
        generarNumero()
    }else {
        fallidos++
        localStorage.setItem('fallidos' , fallidos)
        resultado.innerHTML = 'Fallaste'
        estadisticas.innerHTML = localStorage.getItem('exitosos', 'fallidos')
    }
}

function limpiarDatos() {

    localStorage.clear()
    location.reload()

}

botonComprobar.addEventListener('click', () => {
	comprobarNumero()
})

botonLimpiar.addEventListener('click', () => {
	limpiarDatos()
})