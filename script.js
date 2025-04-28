// encabezado scroll
//INICIO.JS

window.addEventListener('scroll', function() {
  const encabezado = document.querySelector('.encabezado');
  const enlaces = document.querySelectorAll('.titulares a');

  if (window.scrollY > 50) {
      encabezado.classList.add('peg');

      enlaces.forEach(link => {
          link.style.color = '#808080';
      });
  } else {
      encabezado.classList.remove('peg');

      enlaces.forEach(link => {
          link.style.color = 'white';
      });
  }
});




//animaciones pagina principal
function revealOnScroll() {
    const trigger = window.pageYOffset + window.innerHeight - 80;
    document.querySelectorAll('.contpad .imgbtn').forEach(card => {
      if (!card.classList.contains('visible') && trigger > card.offsetTop) {
        card.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('load', revealOnScroll);
  window.addEventListener('scroll', revealOnScroll);
  

  



//pagina 2 scroll



window.addEventListener('scroll', function() {
  const encabezado = document.querySelector('.encabezado');
  const enlaces = document.querySelectorAll('.titulares a');

  if (window.scrollY > 50) {
      encabezado.classList.add('peg');

      enlaces.forEach(link => {
          link.style.color = '#808080';
      });
  } else {
      encabezado.classList.remove('peg');

      enlaces.forEach(link => {
          link.style.color = 'white';
      });
  }
});












//pagina 3 scroll

// PAG3.JS

window.addEventListener('scroll', function() {
  const encabezado = document.querySelector('.encabezado');
  const enlaces = document.querySelectorAll('.titulares a');

  if (window.scrollY > 50) {
      encabezado.classList.add('pegado'); // usa la clase "pegado" de la página 3

      // Cambiar color de los enlaces
      enlaces.forEach(link => {
          link.style.color = '#808080'; // gris como me pediste
      });
  } else {
      encabezado.classList.remove('pegado');

      // Restaurar color original de los enlaces
      enlaces.forEach(link => {
          link.style.color = 'white';
      });
  }
});






//transicion img pag 3
// Activación de las transiciones
window.onload = function() {
  const textos = document.querySelectorAll('.texto');
  const imagenes = document.querySelectorAll('.imagen');
  
  setTimeout(() => {
    textos.forEach((texto, index) => {
      texto.classList.add('show');
    });
    imagenes.forEach((imagen, index) => {
      imagen.classList.add('show');
    });
  }, 100); // Aseguramos que se inicie después de la carga
};



//video
function playVideo() {
    document.getElementById('video').play();
  }
  
  function pauseVideo() {
    document.getElementById('video').pause();
  }
  

var video = document.getElementById("video");
var tiempoActual = document.getElementById("tiempo-vid");

video.addEventListener("timeupdate", function() {
  var minutos = Math.floor(video.currentTime / 60);
  var segundos = Math.floor(video.currentTime % 60);

  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  tiempoActual.textContent = minutos + ":" + segundos;
});

video.addEventListener("ended", function() {
  tiempoActual.textContent = "00:00";
});