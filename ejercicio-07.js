// ### Ejercicio 7: ¿Quién tiene el nombre más largo?

// Usando las variables `conductor` y `navegante` del Ejercicio 1, compara la longitud de ambos nombres y muestra por consola:

// - `"El conductor tiene el nombre más largo: XX caracteres"`, o
// - `"El navegante tiene el nombre más largo: XX caracteres"`, o
// - `"Los dos nombres tienen la misma longitud: XX caracteres"`.

// **Documentación:** `String.length` · `if / else if / else`

let conductor = "Katia";
let navegante = "Luka";

if (conductor.length > navegante.length) {
  console.log(
    `El conductor tiene el nombre más largo: ${conductor.length} caracteres`,
  );
} else if (conductor.length < navegante.length) {
  console.log(
    `El navegante tiene el nombre más largo: ${navegante.length} caracteres`,
  );
} else if (conductor.length === navegante.length) {
  console.log(
    `Los dos nombres tienen la misma longitud: ${navegante.length} caracteres`,
  );
} else {
  console.log(conductor.length, navegante.length);
}
