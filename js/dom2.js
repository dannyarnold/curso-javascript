// CREANDO ELEMENTOS Y SEGMENTOS
// const $figure = document.createElement("figure"),
//     $img = document.createElement("img"),
//     $figcaption = document.createElement("figcaption"),
//     $figcaptionText = document.createTextNode("Animals99"),
//     // $cards = document.querySelector(".cards");

// $img.setAttribute("src", "https://loremflickr.com/200/200/animals")
// $img.setAttribute("alt", "Animals")
// $figure.classList.add("card")
// $figcaption.appendChild($figcaptionText)
// $figure.appendChild($img)
// $figure.appendChild($figcaption)
// $cards.appendChild($figure)

// VIDEO 71

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $newCard2 = document.createElement("figure"),
    $newCard3= document.createElement("figure");
    $newCard4= document.createElement("div");

// $newCard.innerHTML = `
//     <img src="https://loremflickr.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;

// $newCard2.innerHTML = `
//     <img src="https://loremflickr.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;

// $newCard3.innerHTML = `
//     <img src="https://loremflickr.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;
// $newCard4.innerHTML = `
//      <div 
//       style="background-color: orange; color: cyan; border: solid 4px; width: 70px; height: 70px; text-align: center;">DIV</div>
// `;

$newCard.classList.add("card");

// $cards.insertAdjacentElement('beforebegin',$newCard);
// $cards.insertAdjacentElement('afterbegin',$newCard2);
// $cards.insertAdjacentElement('beforeend',$newCard3);
// $cards.insertAdjacentElement('afterend',$newCard4);


let $contentCard = `
    <img src="https://loremflickr.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;
$newCard.insertAdjacentHTML('beforeend',$contentCard);
$newCard.querySelector('figcaption').insertAdjacentText('afterbegin','Any');
// $cards.insertAdjacentElement('afterend',$newCard);

// $cards.prepend($newCard);
// $cards.append($newCard);
// $cards.before($newCard);
$cards.after($newCard);
/*
.insertAdjacent...
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)
Posiciones:
    beforebegin(hemano anterior)
    afterbegin(primer hijo)
    beforeend(último hijo)
    afterend(hermano siguiente
*/