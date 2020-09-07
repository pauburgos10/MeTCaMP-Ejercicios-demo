// requerir paquete nativo de node
const fs = require('fs')

fs.writeFile('mi-archivo.txt', 'Hola, soy un mensaje', (err) => {
  if(err) {
    return console.log('error al escribir el archivo')
  }
  console.log('El archivo fue escrito exitosamente')
})

