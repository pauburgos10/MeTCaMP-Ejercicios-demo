
const express = require('express')
const app = express()

app.use(express.static( __dirname + "./../static"))

/*
app.get('/', (req,res) => {
  res.send('Hello world')
})

app.get('/pau', (req,res) => {
  res.send('Hello Pau')
})
*/

app.listen(3000, ()=>{
  console.log("server started in port 3000")
})