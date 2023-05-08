let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton');

Array.from(botones).forEach(boton => {
    boton.addEventListener('click', function(e){
        const estilos = e.currentTarget.classList;

        if(estilos.contains('disminuir')){
            contador--;
        }
        else if(estilos.contains('aumentar')){
            contador++;
        }

        else {
            contador = 0;
        }
        valor.textContent = contador;


        //Colores

        if(contador > 0){
            valor.style.color='#33FF00'
        }

        if(contador < 0){
            valor.style.color='#ba215a'
        }
    })
}) 
