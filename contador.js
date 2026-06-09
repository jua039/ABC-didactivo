let contador = 0;
let AContador = document.getElementById("contador");


function voltear(tarjeta) {
    if(!tarjeta.classList.contains('volteada')){
        tarjeta.classList.add('volteada');
        contador = contador +1;
        AContador.textContent = contador;
    }else{
        tarjeta.classList.remove('volteada');
        contador = contador-1;
        AContador.textContent = contador;
    }
}
