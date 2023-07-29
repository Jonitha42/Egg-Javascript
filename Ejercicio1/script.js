// Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
// indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.

const parrafo = document.getElementById("p");

const spanClima = document.createElement("span");

clima = prompt("Como está el dia de hoy? soleado, nublado o lluvioso?");

spanClima.textContent = clima;


if (clima === "soleado") {

  spanClima.textContent = clima + " ☀";
  spanClima.style.color = "orange";
} else if (clima === "nublado") {
  spanClima.textContent = clima + " ☁";
  spanClima.style.color = "gray";
} else if (clima === "lluvioso") {
  spanClima.textContent = clima + " ⛈";
  spanClima.style.color = "blue";
}

parrafo.appendChild(spanClima);