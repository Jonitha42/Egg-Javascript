// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de todos ellos.

const pMax = document.getElementById("max")
const pMin = document.getElementById("min")
const pProm = document.getElementById("prom")


let max = -999;
let min = 999;
let prom = 0;
let total = 0;
let cantNum = 0;

let num = parseInt(prompt("Ingrese un numero"));

do {
  num = parseInt(prompt("Ingrese otro numero, cuando quiera terminar presione '0' "));

  max = Math.max(max, num);

  if (num != 0) {
    min = Math.min(min, num);
  }

  total += num;

  cantNum++

} while (num !== 0)

prom = total / cantNum;

pMax.innerHTML = pMax.innerHTML + max;


pMin.innerHTML = pMin.innerHTML + min;

pProm.innerHTML = pProm.innerHTML + prom.toFixed(2)








