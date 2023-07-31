// Construir un programa que simule un menú de opciones para realizar las cuatro operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

let num1 = parseInt(prompt("Ingrese su primer numero "))
let num2 = parseInt(prompt("Ingrese su segundo numero "))

let opcion = prompt("Que operacion desea realizar?");

switch (opcion) {
  case 's':
  case 'S':
    alert(`Usted eligió Suma y el resultado es: ${num1 + num2}`)
    break;
  case 'r':
  case 'R':
    alert(`Usted eligió resta y el resultado es: ${num1 - num2}`)
    break;
  case 'd':
  case 'D':
    num2 == 0 ? alert("Esto da error y no puede realizarse") : alert(`Usted eligió dividir y el resultado es: ${num1 / num2}`)
    break;
  case 'm':
  case 'M':
    alert(`Usted eligió Multiplicar y el resultado es: ${num1 * num2}`)
    break;
  default:
    alert("Usted no eligió ninguna opcion");
    break;
}