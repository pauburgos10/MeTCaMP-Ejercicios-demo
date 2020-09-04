let pelicula = {
  titulo: 'wonder woman',
  genero: 'adventure',
  anio: '2017',
  getTitulo: function(){
    return this.titulo
  }
}
/*
let titulo = pelicula.titulo
let otro = pelicula.genero
let anio = pelicula.anio
*/

let { titulo: nombrePeli, genero, anio} = pelicula

console.log(nombrePeli, genero, anio)

