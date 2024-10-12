//Tu código aquí
const d = document;
d.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});

let resultado = d.getElementById('resultado');
function mostrarAutos() {
    console.log(autos);
    autos.forEach((auto) => {
        const elements = d.createElement('P');
        elements.innerHTML = `Marca: <strong>${auto.marca}</strong> - Modelo: <strong>${auto.modelo}</strong> -
        Año <strong>${auto.year}</strong> -  `;
        resultado.appendChild(elements);
    });
}
