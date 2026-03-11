// ### Ejercicio 9: Del 1 al 30

// 1. Muestra por consola todos los números del 1 al 30.
// 2. Junto a cada número, muestra `"par"` o `"impar"` según corresponda.
// 3. Muestra primero todos los números pares y después todos los impares (en dos pasadas separadas, o usando un criterio de ordenación).

// **Pista:** el operador `%` (módulo) devuelve el resto de una división. Si `n % 2 === 0`, el número es par.
// **Documentación:** [Operador módulo](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder)

const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const par = [];
const impar = [];

for (let i = 0; i < numeros.length; i++) {
  num = numeros[i];
  console.log(num);

  if (num % 2 === 0) {
    par.push(num + " Par");
  } else {
    impar.push(num + " Impar");
  }
}

console.log(`Pares: ${par}, Impares: ${impar}`);
