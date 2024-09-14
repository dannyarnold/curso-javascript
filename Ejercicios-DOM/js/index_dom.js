import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall,shortcuts } from "./dom/teclado.js";

import countdown from "./dom/cuenta_regresiva.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", "menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");

  countdown("countdown","Aug 27, 2025 4:30:00","Feliz cumple!!! 😎");
});


d.addEventListener('keydown',e=>{
  shortcuts(e);
  moveBall(e,'.ball','.stage');
})
// d.addEventListener('keyup',e=>{
//   // shortcuts(e);
// })
// d.addEventListener('keypress',e=>{
//   // shortcuts(e);
// })