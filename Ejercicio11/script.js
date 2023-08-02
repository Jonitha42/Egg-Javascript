// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”


//Pido una frase
let frase = prompt("Escriba su frase y le daremos la palabra mas larga de esa frase")

//Creo la funcion
retornarPalabra = (frase) => {

  let fraseSeparada = frase.split(" ")

  let maxLetras = "";

  fraseSeparada.forEach(palabra => {
    palabra.length > maxLetras.length ? maxLetras = palabra : maxLetras = maxLetras

  })

  return maxLetras
}

//Llamo a la funcion por medio de alert
alert(retornarPalabra(frase))

