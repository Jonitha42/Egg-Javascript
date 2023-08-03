// Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
// 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

const person = document.getElementById("person");

let persona = {
  nombre: "Jonathan",
  edad: 28,
  sexo: "H",
  peso: 70,
  altura: 1.70,
}

person.innerHTML = `Nombre: ${persona.nombre} <br>
edad: ${persona.edad} <br>
  sexo: ' ${persona.sexo} ' <br>
  peso: ${persona.peso} Kg. <br>
  altura: ${persona.altura} Mts.
`

