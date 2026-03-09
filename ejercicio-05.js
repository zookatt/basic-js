// ### Ejercicio 5: Años para jubilarse

// Pide al usuario que introduzca su edad con `prompt()`.
// Calcula cuántos años le quedan para jubilarse, sabiendo que la edad de jubilación es 67 años.
// Muestra el resultado con `alert()`.

// **Pista:** el valor que devuelve `prompt()` es siempre un string, aunque el usuario escriba un número. Busca cómo convertirlo a número antes de operar.
// **Documentación:** [Number()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) · [parseInt()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

let edad = Number(prompt("Introduce tu edad: "));
console.log(typeof edad);
let diferencia = 67 - edad;
alert(`Te queda ${diferencia} años para jubilarse`);
