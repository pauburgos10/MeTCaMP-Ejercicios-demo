
//for (p of jsonRes) {
  /*var peli = jsonRes['Search'][0]
  var poster = peli.Poster
  var title = peli.Title
  var year = peli.Year

  var im =  document.querySelector('.poster')
  im.src = poster

  var ti =  document.querySelector('.title')
  ti.textContent = title
  
  var yr =  document.querySelector('.year')
  yr.textContent = year*/

  //var peli2 = jsonRes['Search'][1]

  for (var peli of jsonRes['Search']) {

    var card = document.createElement('div')
    card.classList.add('card')

    var cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    var imagen = document.createElement('img')
    var titulo = document.createElement('h5')
    titulo.classList.add('card-title')

    var anio = document.createElement('p')
    anio.classList.add('card-text')

    anio.textContent = peli.Year
    titulo.textContent = peli.Title
    imagen.src = peli.Poster
  
    card.appendChild(imagen)
    card.appendChild(cardBody)
    cardBody.appendChild(titulo)
    cardBody.appendChild(anio)
    
    document.querySelector('.row').appendChild(card)

  }

  
  
