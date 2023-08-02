// Escribir una función flecha que reciba una palabra y la devuelva al revés.

const pFrase = document.getElementById("frase")
let frase = "hola como estas"

let fraseAlReves = (cadena) => cadena.split("").reverse().join("")


pFrase.innerHTML = `${fraseAlReves(frase)}`
