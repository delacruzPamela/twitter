var insertText = document.getElementById('insertText');
var submit = document.getElementById('submit');
var newbox = document.getElementById('newbox');

// 2°Agregar un evento de click al botón o de submit al formulario.
submit.addEventListener('click', function() {
  // verificamos si esta vacio o hay texto
  if (insertText.value.length > 0) {
    var newcontainer = document.createElement('div'); /* Creamos un div que almacenara el nuevo texto*/
    var newtext = document.createElement('p'); /* Creamos parrafo que contendra la hora */
    newtext.innerHTML = insertText.value;
    newcontainer.appendChild(newtext);
    newbox.appendChild(newcontainer);
    insertText.value = ''; // Limpiar la caja despues de crear la newcaja
  }
});
