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


document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".animate");

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      
      }
    });
  }, {
    threshold: 0.2, 
  });

  elementos.forEach((el) => observador.observe(el));
});


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








//ROMPE


function permitirSoltar(evento) {
  evento.preventDefault();
}

function iniciarArrastre(evento) {
  evento.dataTransfer.setData('text/plain', evento.target.id);
}

function soltarElemento(evento, casilla) {
  evento.preventDefault();
  if (casilla.children.length > 0) return;

  const id = evento.dataTransfer.getData('text/plain');
  const imagen = document.getElementById(id);

  casilla.innerHTML = '';       
  casilla.appendChild(imagen);  

  imagen.style.transform = 'none';
  imagen.style.width     = '100%';
  imagen.style.height    = '100%';
}

function reiniciarPuzzle() {
  const contenedorVacio = document.querySelector('.piezas-rompe');

  const imagenes = [
    ...document.querySelectorAll('.rompe img'),
    ...document.querySelectorAll('.piezas-rompe img')
  ];

  document.querySelectorAll('.rompe').forEach(zona => {
    zona.innerHTML = 'Arrastre y suelte la imagen aquí';
  });

  contenedorVacio.innerHTML = '';

  imagenes.forEach(imagen => {
    imagen.style.transform = '';
    imagen.style.width     = '';
    imagen.style.height    = '';
    contenedorVacio.appendChild(imagen);
  });
}
