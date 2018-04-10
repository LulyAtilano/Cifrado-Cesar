# Cifrado César

### Descripción
En este proyecto se presentará una página web donde se solicitará al usuario ingrese un texto que quiere será cifrado en Cifrado César.

Se utilizarán dos funciones: *cypher* para encriptar el texto ingresado a Código ASCII y *decypher* para devolver el texto inicial ya con el Cifrado César aplicado.

## Pseudocódigo
Este ejercicio se realizó siguiendo los siguientes pasos:

1. Utilizando un *prompt()* se pedirá al usuario ingrese una frase tipo "string".

2. Usando una condicional, evitar que el usuario deje el campo vació o que contenga números la frase.

3. En caso que se incumpla la condición enviar una alarma para indicar que sólo es válido ingresar texto.

4. Si el texto es correcto, mediante la función *cypher* convertiremos la frase inicial a Código ASCII.

5. Devolveremos al usuario la frase inicial con los nuevos valores, según el Código César (desplazando 33 posiciones a la derecha).

## Diagrama de Flujo

### Descripción
En el website con el uso de un prompt se ingresará a una frase a encriptar en código César, si el texto corresponde a un campo vacío o contiene números se emitirá una alerta al usuario para pedirle que sólo ingrese texto.

Posteriormente usando la función *cypher* encriptaremos la frase en Código ASCII y finalmente devolveremos con la función *decypher* la frase ingresada ya con el Código César aplicado.

![Diagrama de flujo del problema SCOREKEEPER](assets/images/diagrama-flujo-codigoCesar.png)
