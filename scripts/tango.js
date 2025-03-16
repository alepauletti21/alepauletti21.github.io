$(document).ready(function(){
    
    $("#MariaEnlace").click("",function(){
        $("#PantallaMaria").css("display","block");
    });

    $("#MariaEnlace-movil").click("",function(){
        $("#PantallaMariaMovil").css("display","block");
    });

    $("#btnVolver-1").on('click', function()
    {
        $("#PantallaMaria").css("display","none");
    });

    $("#btnVolver-movil-1").on('click', function()
    {
        $("#PantallaMariaMovil").css("display","none");
    });

    $("#ErwinEnlace").click("",function(){
        $("#PantallaErwin").css("display","block");
    });

    $("#ErwinEnlace-movil").click("",function(){
        $("#PantallaErwinMovil").css("display","block");
    });

    $("#btnVolver-2").on('click', function()
    {
        $("#PantallaErwin").css("display","none");
    });

    $("#btnVolver-movil-2").on('click', function()
    {
        $("#PantallaErwinMovil").css("display","none");
    });
    
});



const imagenes = [
    "img/Galeria/FLIATANGUERA/FLIAT1.jpg",
    "img/Galeria/FLIATANGUERA/FLIAT2.jpg",
    "img/Galeria/FLIATANGUERA/FLIAT3.jpg",
    "img/Galeria/FLIATANGUERA/FLIAT4.jpg",
    "img/Galeria/FLIATANGUERA/FLIAT5.jpg"
];

const imagenesMilongas = [
    "img/Galeria/MILONGAS/milo1.jpg",
    "img/Galeria/MILONGAS/milo2.jpg",
    "img/Galeria/MILONGAS/milo3.jpg",
    "img/Galeria/MILONGAS/milo4.jpg",
    "img/Galeria/MILONGAS/milo5.jpg"
];

const imagenesGira = [
    "img/Galeria/SHOW/GIRA2024/GIRA20241.jpg",
    "img/Galeria/SHOW/GIRA2024/GIRA20242.jpg",
    "img/Galeria/SHOW/GIRA2024/GIRA20243.jpg",
    "img/Galeria/SHOW/GIRA2024/GIRA20244.jpg",
    "img/Galeria/SHOW/GIRA2024/GIRA20245.jpg"
];

const imagenesNoche = [
    "img/Galeria/SHOW/BAS/BAS1.jpg",
    "img/Galeria/SHOW/BAS/BAS2.jpg",
    "img/Galeria/SHOW/BAS/BAS3.jpg",
    "img/Galeria/SHOW/BAS/BAS4.jpg"
];

const imagenesShow = [
    "img/Galeria/SHOW/SHOW2019/SHOW20191.jpg",
    "img/Galeria/SHOW/SHOW2019/SHOW20192.jpg",
    "img/Galeria/SHOW/SHOW2019/SHOW20193.jpg",
    "img/Galeria/SHOW/SHOW2019/SHOW20194.jpg",
    "img/Galeria/SHOW/SHOW2019/SHOW20195.jpg"
];

const imagenesBarrio = [
    "img/Galeria/SHOW/BARRIO2019/1.png",
    "img/Galeria/SHOW/BARRIO2019/2.jpg",
    "img/Galeria/SHOW/BARRIO2019/3.jpg"
];

const videosShow = [
    "video/VIDSHOW/VIDSHOW1.mp4",
    "video/VIDSHOW/VIDSHOW2.mp4",
    "video/VIDSHOW/VIDSHOW3.mp4",
    "video/VIDSHOW/VIDSHOW4.mp4",
    "video/VIDSHOW/VIDSHOW5.mp4",
    "video/VIDSHOW/VIDSHOW6.mp4",
    "video/VIDSHOW/VIDSHOW7.mp4",

];

const videosProx = [
    "video/VIDPROX/VIDPROX1.mp4",
    "video/VIDPROX/VIDPROX2.mp4"
];



const videoShow = document.getElementById("CajaVideo");
const botonAnteriorVideoShow = document.getElementById("btnIzquierdaVideoShow");
const botonSiguienteVideoShow = document.getElementById("btnDerechaVideoShow");

if(videoShow && botonAnteriorVideoShow && botonSiguienteVideoShow)
{
    let indiceActualVideoShow = 0;

    function actualizarVideoShow() {
        videoShow.src = videosShow[indiceActualVideoShow];
    }

    botonSiguienteVideoShow.addEventListener("click", () => {
        indiceActualVideoShow = (indiceActualVideoShow + 1) % videosShow.length;
        actualizarVideoShow();
    });

    botonAnteriorVideoShow.addEventListener("click", () => {
        indiceActualVideoShow = (indiceActualVideoShow - 1 + videosShow.length) % videosShow.length;
        actualizarVideoShow();
    });


    actualizarVideoShow();
}

const videoProx = document.getElementById("CajaVideoProx");
const botonAnteriorVideoProx = document.getElementById("btnIzquierdaVideoProx");
const botonSiguienteVideoProx = document.getElementById("btnDerechaVideoProx");

if(videoProx && botonAnteriorVideoProx && botonSiguienteVideoProx)
{
    let indiceActualVideoProx = 0;

    function actualizarVideoProx() {
        videoProx.src = videosProx[indiceActualVideoProx];
    }

    botonSiguienteVideoProx.addEventListener("click", () => {
        indiceActualVideoProx = (indiceActualVideoProx + 1) % videosProx.length;
        actualizarVideoProx();
    });

    botonAnteriorVideoProx.addEventListener("click", () => {
        indiceActualVideoProx = (indiceActualVideoProx - 1 + videosProx.length) % videosProx.length;
        actualizarVideoProx();
    });


    actualizarVideoProx();
}






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

