function sonidoTecla(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {
  const tecla = listaTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio= `#sonido_${instrumento}`;

  tecla.onclick = function (){
    sonidoTecla (idAudio)
  };   

  tecla.onkeydown = function (evento){

    if (evento.code === 'Space' || evento.code === 'Enter') {
      tecla.classList.add('activa')
    }
  }

    tecla.onkeyup = function (){
      tecla.classList.remove('activa')
    }
}

