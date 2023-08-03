// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios y los muestre por pantalla.

const p = document.getElementById("p");

let vectorUno = []

let vectorDos = []

for (let i = 0; i < 5; i++) {
  vectorUno[i] = (Math.random(1, 10) * 10).toFixed(0) + " "
  vectorDos[i] = (Math.random(1, 10) * 10).toFixed(0) + " "
}

let mostrarVector = (elem) => {
  return " [ " + elem + " ] "
}

p.innerHTML = `Vector Uno:  ${mostrarVector(vectorUno)} <br> Vector Dos: ${mostrarVector(vectorDos)} `



