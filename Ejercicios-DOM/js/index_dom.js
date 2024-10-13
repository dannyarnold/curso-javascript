import hamburguerMenu from './dom/menu_hamburguesa.js';
import {digitalClock, alarm} from './dom/reloj.js';
import {moveBall, shortcuts} from './dom/teclado.js';

import countdown from './dom/cuenta_regresiva.js';
import scrollTopButton from './dom/boton_scroll.js';
import darkTheme from './dom/tema_oscuro.js';
import responsiveMedia from './dom/objeto-responsive.js';
import getGeolocation from './dom/geolocalizacion.js';
import searchFilters from './dom/filtro_busquedas.js';

import webCam from './dom/deteccion_webcam.js';
import responsiveTester from './dom/prueba_responsive.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    hamburguerMenu('.panel-btn', '.panel', 'menu a');
    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');
    alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma');

    countdown('countdown', 'Aug 27, 2025 9:30:00', 'Feliz cumple!!! 😎');
    // scrollTopButton(".scroll-top-btn");
});

scrollTopButton('.scroll-top-btn');

responsiveMedia(
    'youtube',
    '(min-width:1024px)',
    'Contenido Móvil',
    'Contenido Escritorio',
);
responsiveMedia(
    'gmaps',
    '(min-width:1024px)',
    'Contenido Móvil',
    'Contenido Escritorio',
);

getGeolocation('geolocation');

searchFilters('.card-filter', '.card');

d.addEventListener('keydown', (e) => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
});

darkTheme('.dark-theme-btn', 'dark-mode');

webCam('webcam');

responsiveTester('responsive-tester');

// d.addEventListener('keyup',e=>{
//   // shortcuts(e);
// })
// d.addEventListener('keypress',e=>{
//   // shortcuts(e);
// })
