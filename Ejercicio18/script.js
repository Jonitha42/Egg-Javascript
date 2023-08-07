// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

var valores = [true, 5, false, "hola", "adios", 2]

let palabras = []

let mayor = 0;
let palabra = ""

valores.forEach(arry => {
  if (typeof (arry) === "string") {
    palabras.push(arry)
  }
});

for (let index = 0; index < palabras.length; index++) {

  if (palabras[index].length >= palabra.length) {
    palabra = palabras[index]
  }
}



// for (let i = 0; i < textos.length - 1; i++) {
//   for (let j = 0; j < textos.length - 1 - i; j++) {
//     if (textos[j].length > textos[j + 1].length) {
//       var temp = textos[j];
//       textos[j] = textos[j + 1];
//       textos[j + 1] = temp;
//     }
//   }
// }


