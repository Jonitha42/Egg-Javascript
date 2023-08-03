// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,Número de páginas.

//Crear un método para cargar un libro pidiendo los datos al usuario y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el numero de páginas.

const title = document.getElementById("title");
const p = document.getElementById("p");

libro = {
  isbn: 0,
  titulo: "",
  autor: "",
  numPaginas: 0
}

const cargarLibro = (libro) => {
  libro.isbn = prompt("Ingrese el ISBN del libro")
  libro.titulo = prompt("Ingrese el titulo del libro")
  libro.autor = prompt("Ingrese el autor del libro")
  libro.numPaginas = prompt("Ingrese el numero de páginas del libro")
}

cargarLibro(libro)

title.innerHTML += libro.titulo
p.innerHTML = `ISBN: ${libro.isbn} <br>
Autor: ${libro.autor} <br>
Numero de páginas: ${libro.numPaginas}
`