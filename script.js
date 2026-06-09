
var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

// botones que llaman a las funciones para mostrar vocales o consonantes

const botonVocales = document.getElementById("vocal-tab");
const botonTodas = document.getElementById("todas-tab");

botonVocales.addEventListener("click", mostrarVocales);
botonTodas.addEventListener("click", mostrarTodas);

function mostrarVocales() {
    const tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(tarjeta => {
        if (tarjeta.dataset.tipo === 'vocal') {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
};

function mostrarTodas() {
    const tarjetas = document.querySelectorAll('.card');

    tarjetas.forEach(tarjeta => {
        tarjeta.style.display = 'block';
    });
}

document.querySelectorAll(".filtro").forEach(boton => {
    boton.addEventListener("click", () => {
        const filtro = boton.dataset.filtro;
        console.log(filtro);
    });
});
//------------------------------------------

let contador = 0;
let AContador = document.getElementById("contador");


