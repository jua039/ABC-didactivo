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


