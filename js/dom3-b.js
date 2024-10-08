const $btnAbrir = document.getElementById('abrir-ventana'),
    $btnCerrar = document.getElementById('cerrar-ventana'),
    $btnImprimir = document.getElementById('imprimir-ventana');

let ventana;
$btnAbrir.addEventListener('click', e => {
    ventana = window.open('https://jonmircha.com');
});
$btnCerrar.addEventListener('click', e => {
    ventana.close();
});
$btnImprimir.addEventListener('click', e => {
    window.print();
});

console.log("*******Objeto URL (location)*******");

console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);
console.log(location.search);
// location.reload();

console.log(history);
console.log(history.length);
// console.log(history.back(1));
// console.log(history.go(-1));
// console.log(history.forward(2));

console.log("*******Objeto Navegador(navigator)*******");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);

