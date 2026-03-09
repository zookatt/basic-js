// ### Ejercicio 2: Las letras de tu nombre

// Muestra por consola cada letra de tu nombre por separado, en mayúsculas, separadas por un espacio.

// Ejemplo: si tu nombre es `"Raul"`, la salida debe ser `R A U L`.

// Hazlo usando un bucle. No escribas cada letra a mano.

// **Pista:** necesitas recorrer el string carácter a carácter y aplicar un método para convertirlo a mayúsculas.
// **Documentación:** `for` · `String.toUpperCase()` · `String.length`

//1. introducir nombre
let nombre = "Katia";
let upperName = "";

for (let i = 0; i < nombre.length; i++) {
  //console.log(i);
  upperName += nombre[i].toUpperCase() + " ";
  console.log(upperName);
}
