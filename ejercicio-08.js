// ### Ejercicio 8: El bartender

// Pide al usuario que introduzca una bebida (`leche`, `coca-cola` o `cerveza`) y su edad.

// El programa debe responder:

// - Si tiene **más de 18 años**: puede pedir cualquier bebida → `"OK, toma tu bebida"`.
// - Si tiene **entre 15 y 18 años** (sin incluir 18): puede pedir coca-cola o leche → `"OK, toma tu bebida"`; si pide cerveza → `"Lo siento, eres demasiado joven para eso"`.
// - Si tiene **14 años o menos**: solo puede tomar leche → `"OK, toma tu leche"`; si pide otra cosa → `"Solo te puedo ofrecer leche"`.

// **Pista:** empieza por la condición más simple (mayor de 18) y añade los casos más complejos después. Dibuja el árbol de decisiones en papel antes de escribir código.
// **Documentación:** `if / else if / else` · comparadores `>`, `<`, `>=`, `<=`, `===`

const bar = ["leche", "coca-cola", "cerveza"];

let bebida = prompt("Que bebida quieres?");
let edad = Number(prompt("Cuantos años tienes?"));

if (edad >= 18) {
  alert("OK, toma tu bebida");
} else if (edad > 14 && edad < 18) {
  if (bebida === "leche") {
    alert("OK, toma tu bebida");
  } else if (bebida === "coca-cola") {
    alert("OK, toma tu bebida");
  } else if (bebida === "cerveza") {
    alert("Lo siento, eres demasiado joven para eso");
  } else {
    console.log(bebida);
  }
} else if (edad <= 14) {
  if (bebida === "leche") {
    alert("OK, toma tu leche");
  } else {
    alert("Solo te puedo ofrecer leche");
  }
} else {
  console.log(edad);
}
