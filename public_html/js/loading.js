var container = document.getElementById('container');
setTimeout(function() {
    container.classList.add('cerrar');
  document.body.style.overflowY= "visible";// después de cargar le devolvemos el scroll
}, 900);