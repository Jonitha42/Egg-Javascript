// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio de una circunferencia y calcular y mostrar por pantalla el área y perímetro. 
//Recuerde que para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio

const PI = Math.PI;

const areaID = document.getElementById("areaID");
const perimetroID = document.getElementById("perimetro");


let radio = prompt("Ingrese el valor del radio de su circunferencia");

//Parseo a float
parseFloat(radio)

let area = PI * (radio * radio);

let perimetro = 2 * PI * radio

//Para limitar los decimales
area = area.toFixed(2);
perimetro = perimetro.toFixed(2);

areaID.innerHTML = areaID.innerHTML + area;

perimetroID.innerHTML = perimetroID.innerHTML + perimetro;





