let contador = 0;
let AContador = document.getElementById("contador");


function voltear(tarjeta) {
    if(!tarjeta.classList.contains('cara-trasera')){
        tarjeta.classList.add('cara-trasera');
        contador = contador +1;
        AContador.textContent = contador;
    }else{
        tarjeta.classList.remove('cara-trasera');
        contador = contador-1;
        AContador.textContent = contador;
    }
}


// botones que llaman a las funciones para mostrar vocales o consonantes

const botonVocales = document.getElementById("vocal-tab");
const botonConsonantes = document.getElementById("consonante-tab");
const botonTodas = document.getElementById("todas-tab");

botonVocales.addEventListener("click", mostrarVocales);
botonConsonantes.addEventListener("click", mostrarConsonantes);
botonTodas.addEventListener("click", mostrarTodas);

function mostrarVocales() {
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
        tarjeta.style.display =
            tarjeta.dataset.tipo === 'vocal' ? 'block' : 'none';
    });
}

function mostrarConsonantes() {
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
        tarjeta.style.display =
            tarjeta.dataset.tipo === 'consonante' ? 'block' : 'none';
    });
}

function mostrarTodas() {
    const tarjetas = document.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
        tarjeta.style.display = 'block';
    });
}
