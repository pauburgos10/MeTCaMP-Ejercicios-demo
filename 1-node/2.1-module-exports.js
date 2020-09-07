let miVar1 = 10

let miVar2 = (mensaje) => {
  console.log('El mensaje es', mensaje)
}

// Gracias a ES6 nos permite acortar la asignacion del valor si queremos 
// exportar el objeto con el mismo nombre que ya tiene
module.exports = {
  miVar1,
  mostrarMensaje: miVar2
}


