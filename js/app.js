// *********** FUNCIONES ***********

/* Función CYPHER, esta función va a devolver el mensaje ingresado por el usuario
 a su equivalente en código ASCII. */

var cipher = function (initialPhrase) {
  var stringAscii = [];
  for (var i = 0; i < initialPhrase.length; i++) {
    stringAscii.push(initialPhrase.charCodeAt(i));
  } // for
   console.log(stringAscii);
  return stringAscii;
}

/* Función DECIPHER, utilizará cipher para aplicarle el código César y regresar el
 mensaje original con la nueva posición del código ASCII. */

function decipher (array,position) {
  var auxCesar = [];
  var auxDecipher = "";
  // Se aplica el cifrado César moviendo 7 posiciones a la derecha del abecedario.
  for ( var i = 0; i < array.length; i++ ) {
    if ( array[i] >= 65 || array[i] <= 90 ) {
      auxCesar.push( array[i] + position );
    } else if ( array[i] >= 97 || array[i] <= 122 ) {
      auxCesar.push( array[i] + position );
    }
    // Se vuelve a convertir a código ASCII ya con el cambio de posición de las letras.
      auxDecipher += String.fromCharCode(auxCesar[i]);
    }
    console.log(auxDecipher);
    return auxDecipher;
    // document.getElementById("finalAnswer").innerHTML = "Tu palabra cifrada en césar es: " + auxDecipher;
  }

// *********** VARIABLES ***********

/* Mostrar un prompt solicitando al usuario ingrese una frase o palabra
para cifrar en código César, evaluando que no sea un número, dejar el campo vacío o poner un espacio.
*/
  do {
    var message = prompt ('Ingresa una palabra que quieras cifrar en César \n Favor de evitar ingresar números o dejar el campo vacío \n ');
//    document.getElementById("firstAnswer").innerHTML = message;
    } while ( (message) === "" || isNaN (message) === false );
    console.log(message);

// *********** LLAMADAS A FUNCIÓN ***********

decipher(cipher(message),7);
