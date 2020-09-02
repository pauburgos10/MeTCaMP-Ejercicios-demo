require('./config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

 
app.get('/usuario', function (req, res) {
  res.json('get usuarios')
})

app.get('/usuario/:id', function (req, res) {
  res.json('get usuario id = ' + req.params.id)
})

app.post('/usuario', function (req, res) {
  res.json(req.body)
})

app.put('/usuario', function (req, res) {
  res.json('modificar usuario')
})

app.delete('/usuario/:id', function (req, res) {
  res.json('borrar usuario')
})

 
app.listen(process.env.PORT, ()=> {
  console.log('server iniciado en puerto', process.env.PORT )
})