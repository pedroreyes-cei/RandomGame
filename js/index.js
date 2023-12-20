//VARIABLES
let random;
let buttonC= document.querySelector(`.section__button`);
let buttonClean = document.querySelector(`.borrarDatos`)
let result = document.querySelector(`#resultado`);
let statistics = document.querySelector(`#estadisticas`);
let exitosos = localStorage.getItem(`exitosos`)|| 0;
let fallidos = localStorage.getItem(`fallidos`) || 0;

//FUNCIONES
function numeroAleatorio(){
    random = Math.round(Math.random()*10);
    console.log(random);
}


function numeroAñadido(){
    let numero = document.querySelector(`#numeroUsuario`).value;

    if( numero === random){
        exitosos++;
        localStorage.setItem(`exitosos`, exitosos);
        result.innerHTML= `¡OLÉ! gastaste la suerte del mes`;
        result.classList.add(`correcto`);
        statistics.innerHTML=`Fallidos:${fallidos}. Exitos:${exitosos}`;

    }else{
        fallidos++;
        localStorage.setItem(`fallidos`,fallidos);
        result.innerHTML=`una pena but lo esperabamos que fallaras`;
        result.classList.add(`incorrecto`);
        statistics.innerHTML=`Fallidos:${fallidos}. Exitos:${exitosos}`;
    }

}

function cleanData(){
    localStorage.clear();
    location.reload();

}

//botones
buttonC.addEventListener(`click`, numeroAñadido);
buttonClean.addEventListener(`click`, cleanData);