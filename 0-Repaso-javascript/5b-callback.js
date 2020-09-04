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

let obtenerPelicula = (id, callback) =>{
  let peliculaDB = peliculas.find(p => p.id == id)
  if(!peliculaDB) {
    callback(`No existe la pelicula con id ${id}`)
  } else {
    callback(null, peliculaDB)
  }
}


let obtenerGenero = (pelicula, callback)  => {
  let generoDB = generos.find(g => g.id == pelicula.generoID)

  if(!generoDB){
    callback(`No se encontro un genero con el id ${pelicula.generoID}`)
  } else {
    callback(null, {
      titulo: pelicula.titulo,
      genero: generoDB.nombre,
      anio: pelicula.anio
    })
  }
}
      //funcion de callback anonima, no tiene nombre
obtenerPelicula(1, (err, pelicula)=>{
  
  if (err) {
    return console.log(err)
  }

  obtenerGenero(pelicula, (err, resultado)=>{
    if(err){
      return console.log(err)
    }
    console.log( `El genero de ${resultado.titulo} es ${resultado.genero}`)
    // Posible callback HELL!!!!
  })
})


