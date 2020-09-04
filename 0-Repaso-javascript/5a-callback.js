/*
setTimeout(()=>{
  console.log('Ejecutando funcion')
}, 3000)
*/

let crearUsuarioAdmin = (id,nombre, escribirMensaje) => {

  let usuario = {
    nombre: nombre,
    id: id,
    rol: 'Admin'
  }

  escribirMensaje(usuario)
  
  console.log('algo q va despues')
}

crearUsuarioAdmin(10,'Delfina', (usuario)=> {
  console.log(`${usuario.nombre} tiene rol ${usuario.rol}`)
})



