var insertText = document.getElementById('insertText');
var submit = document.getElementById('submit');
submit.disabled = true;

var newbox = document.getElementById('newbox');

// 2°Agregar un evento de click al botón o de submit al formulario.
submit.addEventListener('click', function() {
  // verificamos si esta vacio o hay texto
  if (insertText.value.length > 0) {
    var newcontainer = document.createElement('div'); /* Creamos un div que almacenara el nuevo texto*/
    var newtext = document.createElement('p'); /* Creamos parrafo que contendra la hora */
    var time = moment().format('LT');
    newtext.innerHTML = time;   
    newcontainer.innerHTML = insertText.value;//
    newcontainer.appendChild(newtext); //
    newbox.appendChild(newcontainer); //
    insertText.value = ''; // Limpiar la caja despues de crear la newcaja
   
    //  validacion si pasa los 140 caracteres deshabilita boton.
    var account = document.getElementById('account');
    account.textContent = '140';
    account.style = '#325d81';
    submit.disabled = true;
    insertText.style = 'initial';
  } else {
    submit.disabled = true;
  }
});

// funcion que valida numero de caracteres.
insertText.addEventListener('keyup', function() {
  submit.disabled = false;
  var max = 140;
  var rest = '';
  var publications = insertText.value.length;
  rest = max - publications;
  account.value = rest;
  // Deshabilita el boton cuando no se ingresa texto.
  account.innerHTML = rest;
  if (account.value < 0) {
    submit.disabled = true;
  } else if (account.value < 10) {
    account.style.color = '#ff0000';
  } else if ( account.value >= 10 && account.value <20) {
    account.style.color = '#ff9900';
  } else {
    account.style.color = '#325d81';
  }
});
