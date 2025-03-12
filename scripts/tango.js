$(document).ready(function(){

});



const imagenes = [
    "img/familia01.jpg",
    "img/familia02.jpg",
    "img/familia03.jpg",
    "img/familia04.jpg",
    "img/familia05.jpg"
];

const imagenesMilongas = [
    "img/milonga01.jpg",
    "img/milonga02.jpg",
    "img/milonga03.jpg",
    "img/milonga04.jpg",
    "img/milonga05.jpg"
];

const imagenesGira = [
    "img/gira01.jpg",
    "img/gira02.jpg",
    "img/gira03.jpg",
    "img/gira04.jpg",
    "img/gira05.jpg"
];

const imagenesNoche = [
    "img/noche01.jpg",
    "img/noche02.jpg",
    "img/noche03.jpg",
    "img/noche04.jpg"
];

const imagenesShow = [
    "img/show01.jpg",
    "img/show02.jpg",
    "img/show03.jpg",
    "img/show04.jpg",
    "img/show05.jpg"
];

const imagenesBarrio = [
    "img/barrio01.jpg",
    "img/barrio02.jpg",
    "img/barrio03.jpg"
];


const imagen = document.getElementById("imagen-galeria");
const botonAnterior = document.getElementById("btnIzquierda");
const botonSiguiente = document.getElementById("btnDerecha");

if(imagen && botonAnterior && botonSiguiente)
{
    let indiceActual = 0;

    function actualizarImagen() {
    imagen.src = imagenes[indiceActual];
    }

    botonSiguiente.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    actualizarImagen();
    });

    botonAnterior.addEventListener("click", () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    actualizarImagen();
    });


    actualizarImagen();
}





const imagen_milongas = document.getElementById("imagen-galeria-milongas");
const botonAnteriorMilongas = document.getElementById("btnIzquierdaMilongas");
const botonSiguienteMilongas = document.getElementById("btnDerechaMilongas");


if(imagen_milongas && botonAnteriorMilongas && botonSiguienteMilongas)
{
    let indiceActualMilongas = 0;

    function actualizarImagenMilongas() {
    imagen_milongas.src = imagenesMilongas[indiceActualMilongas];
    }

    botonAnteriorMilongas.addEventListener("click", () => {
    indiceActualMilongas = (indiceActualMilongas + 1) % imagenesMilongas.length;
    actualizarImagenMilongas();
    });

    botonSiguienteMilongas.addEventListener("click", () => {
    indiceActualMilongas = (indiceActualMilongas - 1 + imagenesMilongas.length) % imagenesMilongas.length;
    actualizarImagenMilongas();
    });


    actualizarImagenMilongas();
}

const imagen_gira = document.getElementById("imagen-galeria-gira");
const botonAnteriorGira = document.getElementById("btnIzquierdaGira");
const botonSiguienteGira = document.getElementById("btnDerechaGira");


if(imagen_gira && botonAnteriorGira && botonSiguienteGira)
{
    let indiceActualGira = 0;

    function actualizarImagenGira() {
        imagen_gira.src = imagenesGira[indiceActualGira];
    }

    botonAnteriorGira.addEventListener("click", () => {
        indiceActualGira = (indiceActualGira + 1) % imagenesGira.length;
        actualizarImagenGira();
    });

    botonSiguienteGira.addEventListener("click", () => {
        indiceActualGira = (indiceActualGira - 1 + imagenesGira.length) % imagenesGira.length;
        actualizarImagenGira();
    });


    actualizarImagenGira();
}


const imagen_noche = document.getElementById("imagen-galeria-noche");
const botonAnteriorNoche = document.getElementById("btnIzquierdaNoche");
const botonSiguienteNoche = document.getElementById("btnDerechaNoche");


if(imagen_noche && botonAnteriorNoche && botonSiguienteNoche)
{
    let indiceActualNoche = 0;

    function actualizarImagenNoche() {
        imagen_noche.src = imagenesNoche[indiceActualNoche];
    }

    botonAnteriorNoche.addEventListener("click", () => {
        indiceActualNoche = (indiceActualNoche + 1) % imagenesNoche.length;
        actualizarImagenNoche();
    });

    botonSiguienteNoche.addEventListener("click", () => {
        indiceActualNoche = (indiceActualNoche - 1 + imagenesNoche.length) % imagenesNoche.length;
        actualizarImagenNoche();
    });


    actualizarImagenNoche();
}


const imagen_show = document.getElementById("imagen-galeria-show");
const botonAnteriorShow = document.getElementById("btnIzquierdaShow");
const botonSiguienteShow = document.getElementById("btnDerechaShow");


if(imagen_show && botonAnteriorShow && botonSiguienteShow)
{
    let indiceActualShow = 0;

    function actualizarImagenShow() {
        imagen_show.src = imagenesShow[indiceActualShow];
    }

    botonAnteriorShow.addEventListener("click", () => {
        indiceActualShow = (indiceActualShow + 1) % imagenesShow.length;
        actualizarImagenShow();
    });

    botonSiguienteShow.addEventListener("click", () => {
        indiceActualShow = (indiceActualShow - 1 + imagenesShow.length) % imagenesShow.length;
        actualizarImagenShow();
    });


    actualizarImagenShow();
}

const imagen_barrio = document.getElementById("imagen-galeria-barrio");
const botonAnteriorBarrio = document.getElementById("btnIzquierdaBarrio");
const botonSiguienteBarrio = document.getElementById("btnDerechaBarrio");


if(imagen_barrio && botonAnteriorBarrio && botonSiguienteBarrio)
{
    let indiceActualBarrio = 0;

    function actualizarImagenBarrio() {
        imagen_barrio.src = imagenesBarrio[indiceActualBarrio];
    }

    botonAnteriorBarrio.addEventListener("click", () => {
        indiceActualBarrio = (indiceActualBarrio + 1) % imagenesBarrio.length;
        actualizarImagenBarrio();
    });

    botonSiguienteBarrio.addEventListener("click", () => {
        indiceActualBarrio = (indiceActualBarrio - 1 + imagenesBarrio.length) % imagenesBarrio.length;
        actualizarImagenBarrio();
    });


    actualizarImagenBarrio();
}

