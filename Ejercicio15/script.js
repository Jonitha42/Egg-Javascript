// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. 
//El radio del círculo lo proporcionará el usuario.

Circulo = {
  radio: 0,
  area: 0,
  perimetro: 0
}

const calcularArea = (radio) => (Math.PI * Math.pow(radio, 2)).toFixed(2)

const calcularPerimetro = (radio) => (2 * Math.PI * radio).toFixed(2)

Circulo.radio = prompt("Ingrese el radio")

alert("Area: " + calcularArea(Circulo.radio) + ", Perimetro: " + calcularPerimetro(Circulo.radio))