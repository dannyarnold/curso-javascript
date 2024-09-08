import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall,shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", "menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");

});


d.addEventListener('keydown',e=>{
  shortcuts(e);
})
d.addEventListener('keyup',e=>{
  // shortcuts(e);
})
d.addEventListener('keypress',e=>{
  // shortcuts(e);
})