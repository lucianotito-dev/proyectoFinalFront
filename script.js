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


window.addEventListener('scroll', function() {
  const encabezado = document.querySelector('.encabezado');
  const enlaces = document.querySelectorAll('.titulares a');

  if (window.scrollY > 50) {
      encabezado.classList.add('pegado'); 

      enlaces.forEach(link => {
          link.style.color = '#808080'; 
      });
  } else {
      encabezado.classList.remove('pegado');

      enlaces.forEach(link => {
          link.style.color = 'white';
      });
  }
});






//transicion img pag 3
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
  }, 100);
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