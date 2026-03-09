// ### Ejercicio 4: Saludo personalizado

// Pide al usuario su nombre y su apellido por separado usando `prompt()`.
// Muestra por consola el saludo: `"Hola, [nombre] [apellido]!"`.

// **Pista:** busca cómo unir dos strings en JavaScript.
// **Documentación:** [Template literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

let nombre = prompt("Introduce tu nombre: ");
let apellido = prompt("Introduce tu apellido: ");
console.log(`Hola, ${nombre} ${apellido}!`);
