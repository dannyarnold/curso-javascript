const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");

function holaMundo() {
  alert("Hola Mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre} :o)=`);
  console.log(event);
}

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Función anonima: Manejador de eventos semánticos");
  console.log(e);
  console.log(event);
};

// $eventoMultiple.addEventListener('click',holaMundo);
// $eventoMultiple.addEventListener('click',(e)=>{
//     alert('Manejador de EVENTOS MÚLTIPLES');
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(event);
// })

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("John");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

// $eventoRemover.addEventListener('dblclick',(e)=>{
//     alert(`Removiendo el evento de tipo ${e.type}`);
//     console.log(e);
//     $eventoRemover.removeEventListener('dblclick');
// });
$eventoRemover.addEventListener("dblclick", removerDobleClick);

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hello,  ${this} greets you, the click was caused by ${e.target.className}`
  );
  //   e.stopPropagation();
}

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);

  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy tu amigo y docente digital...ZANDA");
    e.preventDefault();
  }
});
// console.log($divsEventos);

// $divsEventos.forEach((div) => {
//   // Fase de burbuja
//   // div.addEventListener('click',flujoEventos);
//   // div.addEventListener('click',flujoEventos,false);
//   // Fase de captura
//   div.addEventListener("click", flujoEventos, true);

//   // div.addEventListener('click',flujoEventos,{
//   //     capture: true,
//   //     once: true,
//   // });
// });

// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola soy tu amigo y docente digital ... Jonathan MirCha");
//   e.preventDefault();
//   e.stopPropagation();
// });

// console.log(alert());
// console.log(window);
// console.log(window.document);

// BOM Browser Object Model
window.addEventListener("resize", (e) => {
  console.clear();
  console.log("*******Evento Resize*******");
  console.log("innerWidth: ", window.innerWidth);
  console.log("innerHeight: ", window.innerHeight);
  console.log("outerWidth: ", window.outerWidth);
  console.log("outerHeight: ", window.outerHeight);
});
window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("*******Evento Scroll*******");
  console.log("scrollX: ", window.scrollX);
  console.log("scrollY: ", window.scrollY);
  console.log(e);
});

window.addEventListener("load", (e) => {
  console.clear();
  console.log("*******Evento Load*******");
  console.log("screenX: ", window.screenX);
  console.log("screenY: ", window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("*******Evento DOMContentLoaded*******");
  console.log("screenX: ", window.screenX);
  console.log("screenY: ", window.screenY);
  console.log(e);
});

// var $alerta = window.alert('Alerta');
// var $confirado = window.confirm('Confirmación');
// console.log($alerta);
// console.log($confirmado);

const $btnAbrir = document.getElementById('abrir-ventana'),
$btnCerrar = document.getElementById('cerrar-ventana'),
$btnImprimir = document.getElementById('imprimir-ventana');

let ventana;
$btnAbrir.addEventListener('click',e=>{
  ventana = window.open('https://jonmircha.com');
});
$btnCerrar.addEventListener('click',e=>{
  ventana.close();
});
$btnImprimir.addEventListener('click',e=>{
  window.print();
});

console.log("*******Objeto URL (location)");
