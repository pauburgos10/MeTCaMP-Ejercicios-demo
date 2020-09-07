//Base de datos
let peliculas = [{
  id:1,
  titulo: 'wonder woman',
  generoID: 1,
  anio: '2017'  
}, 
{
  id:2,
  titulo: 'little women',
  generoID: 2,
  anio: '2005'  
},
{
  id:3,
  titulo: 'pretty woman',
  generoID: 3,
  anio: '1990'  
}]

let generos = [
  {
    id:1,
    nombre: 'Ficción'
  },
  {
    id: 2,
    nombre: 'Terror'
  },
  {
    id: 3,
    nombre: 'Drama'
  }
]
// para la promesa, no usamos el parametro de callback 
// en lugar de eso voy a devolver una Promesa
let obtenerPelicula = (id) => {
  //
  return new Promise((resolve, reject) => {

    let peliculaDB = peliculas.find(p => p.id == id)
    if (!peliculaDB) {
      reject(`No existe la pelicula con id ${id}`)
    } else {
      resolve(peliculaDB)
    }
  })
}

obtenerPelicula(5).then(pelicula => {
  console.log('Pelicula de base de datos', pelicula)
}).catch(err => {console.log(err)})


