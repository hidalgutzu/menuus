// ---------- MENÚ HAMBURGUESA Y FONDO ESTÁTICO ----------
// llamamos a body para poder modificarlo
const body = document.querySelector('.body');
// llamamos al menú
const menu = document.querySelector('.burger-menu');
// llamamos al menú principal
const menuPrincipal = document.querySelector('.menu-principal');
// llamamos al botón "hamburguesa"
const burgerButton = document.querySelector('.burger-button');
// llamamos al botón "cerrar"
const closeButton = document.querySelector('#close-menu');

// CLICK para activar las funciones  
burgerButton.addEventListener('click', show)
closeButton.addEventListener('click', hide)

// la función ADD
function show() {
menu.classList.remove('hidebm');
closeButton.classList.remove('ocultar');
menuPrincipal.classList.add('ocultar');
menu.classList.add('is-active');
body.classList.add('hideoverflow');
}
// la función REMOVE
function hide() {
menu.classList.add('hidebm');
closeButton.classList.add('ocultar');
menuPrincipal.classList.remove('ocultar');
menu.classList.remove('is-active');
body.classList.remove('hideoverflow');
}


/////////////


       // 2. This code loads the IFrame Player API code asynchronously.
       var tag = document.createElement('script');

       tag.src = "https://www.youtube.com/iframe_api";
       var firstScriptTag = document.getElementsByTagName('script')[0];
       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
       // 3. This function creates an <iframe> (and YouTube player)
       //    after the API code downloads.
       var player;
       function onYouTubeIframeAPIReady() {
         player = new YT.Player('player', {
           height: '390',
           width: '640',
           videoId: YOUR_ID_HERE,
           playerVars: {
             controls: 0,
             showinfo:0,
             rel:0,
           },
           events: {
             'onReady': onPlayerReady,
           }
         });
       }
 

//Youtube Modal script