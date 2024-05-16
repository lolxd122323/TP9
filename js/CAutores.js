class Autor {
    constructor(nombre, apellido, nacionalidad, mejorObra, anioPublicacion, edadPublicacion) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.nacionalidad = nacionalidad;
      this.mejorObra = mejorObra;
      this.anioPublicacion = anioPublicacion;
      this.edadPublicacion = edadPublicacion;
    }
  }
   const autores = [
    new Autor("Gabriel", "García Márquez", "Colombiano", "Cien años de soledad", 1967, 40),
    new Autor("Julio", "Cortázar", "Argentino", "Rayuela", 1963, 48),

  ];
  
function crearTabla(titulos, datos) {
    let tabla = "<table><tr>";
    titulos.forEach(titulo => tabla += `<th>${titulo}</th>`);
    tabla += "</tr>";
  
    datos.forEach(fila => {
      tabla += "<tr>";
      fila.forEach(dato => tabla += `<td>${dato}</td>`);
      tabla += "</tr>";
    });
  
    tabla += "</table>";
    return tabla;
  }
  const autoresArgentinos = autores.filter(autor => autor.nacionalidad === "Argentino");
  const tablaAutoresArgentinos = crearTabla(["Nombre", "Apellido", "Mejor Obra"], autoresArgentinos.map(autor => [autor.nombre, autor.apellido, autor.mejorObra]));
  document.write(tablaAutoresArgentinos);
 
  const autores1960_1980 = autores.filter(autor => autor.anioPublicacion >= 1960 && autor.anioPublicacion <= 1980);
  const tablaAutores1960_1980 = crearTabla(["Nombre", "Apellido", "Mejor Obra", "Año Publicación"], autores1960_1980.map(autor => [autor.nombre, autor.apellido, autor.mejorObra, autor.anioPublicacion]));
  document.write(tablaAutores1960_1980); 

  const promedioEdad = autores.reduce((acumulador, autor) => acumulador + autor.edadPublicacion, 0) / autores.length;
  document.write(`Edad promedio: ${promedioEdad}`);

  const tablaAutores = crearTabla(["Nombre", "Apellido", "Nacionalidad", "Mejor Obra", "Año Publicación", "Edad Publicación"], autores.map(autor => [autor.nombre, autor.apellido, autor.nacionalidad, autor.mejorObra, autor.anioPublicacion, autor.edadPublicacion]));
  document.write(tablaAutores);
