// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un espacio entre cada letra.
// La frase se mostrara así: H o l a. Nota: recordar el funcionamiento de la función Substring().

const pFrase = document.getElementById("frase")

let frase = prompt("Ingrese su frase")
let newFrase = " ";


for (let i = 0; i < frase.length; i++) {

  newFrase += frase.substring(i, i + 1) + " "

}

pFrase.innerHTML = newFrase.trim()
