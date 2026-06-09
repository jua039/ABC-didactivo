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