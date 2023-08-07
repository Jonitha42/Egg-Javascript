// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el resultado

myArray = ["Casa", "Auto", "Bici", "Motocicleta"]

eliminarElementos = (arry) => arry.splice(arry.length - 2, 2)

alert("Array original: " + myArray)

const nuevoArray = eliminarElementos(myArray)


alert("Array sin los ultimos dos elementos: " + " [" + myArray + "] " + "------ Los dos ultimos elementos eliminados fueron: " + " [" + nuevoArray + "] ")
