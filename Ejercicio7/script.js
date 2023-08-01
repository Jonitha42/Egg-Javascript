// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación solicite números al usuario hasta que la suma de los números introducidos supere el límite inicial.

let numero = prompt("Ingrese su numero positivo");


while (numero < 0) {
  numero = prompt("Vuelva a escribir su numero")
}

let total = 0;
for (let i = 0; total <= numero; i++) {
  i = parseInt(prompt("Ahora ingrese numeros"))

  total = parseInt(total) + parseInt(i);
  console.log(total);
}

//Estoy seguro que este ejercicio tiene mejores formas de resolverlo (quizas con otro bucle while) pero weno
