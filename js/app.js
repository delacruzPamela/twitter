window.addEventListener('load', function() {
  var insertText = document.getElementById('insertText');
  var sendTwitt = document.getElementById('submit');
  sendTwitt.disabled = true;

  var newBox = document.getElementById('newbox');

  // 2°Agregar un evento de click al botón o de submit al formulario.
  sendTwitt.addEventListener('click', function() {
  // verificamos si esta vacio o hay texto
    if (insertText.value.length > 0) {
      var newContainer = document.createElement('div'); /* Creamos un div que almacenara el nuevo texto*/
      var newText = document.createElement('p'); /* Creamos parrafo que contendra la hora */
      var time = moment().format('LT');
      newText.innerHTML = time;   
      newContainer.innerHTML = insertText.value;//
      newContainer.appendChild(newText); //
      newBox.appendChild(newContainer); //
      insertText.value = ''; // Limpiar la caja despues de crear la newcaja
   
      //  validacion desabilitar boton si ya realizo su twitt y no exedio los 140 caracteres.
      var account = document.getElementById('account');
      account.textContent = '140';
      account.style = '#325d81';
      sendTwitt.disabled = true;
      insertText.style = 'initial';
    } else {
      sendTwitt.disabled = true;
    }
  });

  // Funcion Valida numero de caracteres
  insertText.addEventListener('keyup', function() {
    sendTwitt.disabled = false;
    var max = 140;
    var rest = '';
    var publication = insertText.value.length;
    rest = max - publication;
    account.value = rest;
    // Deshabilitar boton twittear cuando exede el texto establecido (140)
    account.innerHTML = rest;
    if (account.value < 0) {
      sendTwitt.disabled = true;
    } else if (account.value < 1) {
      account.style.color = '#B71C1C'; /* Fuera del rango Color rojo */
    } else if (10 >= account.value && account.value >= 1) {
      account.style.color = '#2E7D32'; /* Advertencia Color verde */
    } else {
      account.style.color = '#325d81'; /* Iniciando escritura Color azul */
    }
  });

  // funcion para que el textarea cresca segun el texto ingresado.
  insertText.addEventListener('keyup', function(event) {
    if (event.keyCode = 13) {
      insertText.style.height = (insertText.scrollHeight) + 'px';
    } else if (insertText.value.length >= 171) {
      insertText.style.height = (insertText.scrollHeight) + 'px';
    } else {
      insertText.style = 'initial';
    }
  });
});

