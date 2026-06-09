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
