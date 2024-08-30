/*
const contexto = window.document;

console.log(contexto)
console.log(contexto.head)
console.log(contexto.body)
console.log(contexto.documentElement)
console.log(contexto.doctype)
console.log(contexto.characterSet)
console.log(contexto.title)
console.log(contexto.links)
console.log(contexto.images)
console.log(contexto.styleSheets)
console.log(contexto.scripts)
setTimeout(() => console.log(contexto.getSelection().toString()), 3000)
console.log(contexto.write(`<h2>Soy Danny, escribo ésto en dom.html</h2>`))


console.log(contexto.getElementsByTagName("li"))
console.log(contexto.getElementsByClassName("card"))
console.log(contexto.getElementsByName("nombre"))
console.log(contexto.getElementById("menu"))

console.log(contexto.querySelector("#menu"))
console.log(contexto.querySelectorAll("a"))
console.log(contexto.querySelectorAll(".card"), 2)
console.log(contexto.querySelectorAll("#menu li"))

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-AR")
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom")
$linkDOM.setAttribute("target", "_blank")
$linkDOM.setAttribute("rel", "noopener")
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha")
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

// DATA-ATTRIBUTE

console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset)
console.log($linkDOM.dataset.description)
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte"
console.log($linkDOM.dataset.description)
console.log($linkDOM.hasAttribute("data-id"))
console.log($linkDOM.removeAttribute("data-id"))

// ESTILOS Y VARIABLES
console.log($linkDOM.style)
console.log($linkDOM.style.backgroundColor)
console.log($linkDOM.getAttribute("style"))
window.getComputedStyle($linkDOM)
window.getComputedStyle($linkDOM).getPropertyValue("color")

$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
$linkDOM.style.fontFamily = "monospace";
$linkDOM.style.fontSize = "23px";

// Custom Properties CSSS
const $html = document.documentElement, $body = document.body;
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"), varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color", "#000")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

$body.style.setProperty("background-color", varDarkColor)

const $card = document.querySelector(".card")

console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
console.log($card.className)
console.log($card.classList)
$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
console.log($card.classList.replace("rotate-45", 'rotate-135'))
$card.classList.add('opacity-80', 'sepia')

console.log('card-2')
const $card2 = document.querySelector(".card")
console.log($card2.classList.contains("rotate-45"))
$card2.classList.add("rotate-45")
// $card2.classList.toggle("rotate-135")
console.log($card2.classList.replace("rotate-45", 'rotate-135'))
$card2.classList.add('opacity-80', 'sepia')

// video 66
const $whatIsDOM = document.getElementById("que-es");
let text = `
<p>
El modelo de objetos del Documento <b><i>DOM</i></b> es un API para documentos HTML y XML</p>
<p>Provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante objetos js</p>
<p><mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark></p>
`;

// $whatIsDOM.innerText = text
$whatIsDOM.textContent = text
$whatIsDOM.innerHTML = text
$whatIsDOM.textContent = text
$whatIsDOM.outerHTML = text

*/

// DOM traversing
// const $cards = document.querySelector(".cards")
// console.log($cards)
// console.log($cards.children)
// console.log($cards.childNodes)
// console.log($cards.children[2])
// console.log($cards.parentElement)
// console.log($cards.firstChild)
// console.log($cards.firstElementChild)
// console.log($cards.lastChild)
// console.log($cards.lastElementChild)
// console.log($cards.previousElementSibling)
// console.log($cards.nextElementSibling)
// console.log($cards.children[3].closest("section"))

// CREANDO ELEMENTOS Y SEGMENTOS
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://loremflickr.com/200/200/animals")
$img.setAttribute("alt", "Animals")
$figure.classList.add("card")
$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

const $figure2 = document.createElement("figure")
$figure2.innerHTML = `
<img src="https://loremflickr.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card")
$cards.appendChild($figure2)

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]
$ul = document.createElement("ul")

document.write("<h3>Estaciones del año</h3>")
document.body.appendChild($ul)

estaciones.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el;
    $ul.appendChild($li)
})

const continentes = ["África", "América", "Asia", "Europa", "Oceanía"]
$ul2 = document.createElement("ul")

document.write("<h3>Continentes del Mundo</h3>")
document.body.appendChild($ul2)

$ul2.innerHTML = ""
continentes.forEach(el => {
    $ul2.innerHTML += `<li>${el}</li>`
})

const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"
],
    $ul3 = document.createElement("ul"),
    $fragmento = document.createDocumentFragment()

meses.forEach(mes => {
    const $li = document.createElement("li")
    $li.textContent = mes
    $fragmento.appendChild($li)
})

document.write("<h3>Meses del año</h3>")
$ul3.appendChild($fragmento)
document.body.appendChild($ul3)

// TEMPLATES HTML

const $cards2 = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragmento2 = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://loremflickr.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://loremflickr.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://loremflickr.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://loremflickr.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://loremflickr.com/200/200/nature",
        },
    ]

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title

    let $clone = document.importNode($template, true)

    $fragmento2.appendChild($clone);
})

$cards.appendChild($fragmento2)


const cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://loremflickr.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card")

// $cards.replaceChild($newCard, $cards.children[2])
// $cards.removeChild($cards.lastElementChild)
// $cards.insertBefore($newCard, $cards.firstElementChild)
// $cards.insertAfter($newCard, $cards.firstElementChild)

document.body.appendChild($cloneCards)

const $tarjetas = document.querySelector('.cards'),
    $newTarjeta = document.createElement('figure');

$newTarjeta.innerHTML = `
<img src="https://loremflickr.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;

$newTarjeta.classList('card');
$tarjetas.insertAdjacentElement('beforebegin', $newTarjeta);



