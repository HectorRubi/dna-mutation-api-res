const hasMutation = require('dna-mutation');
const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const port = process.env.PORT || 8080

const jsonParser = bodyParser.json()

app.get('/stats', function(req, res) {
  res.json({ mensaje: '¡Hola Mundo!' })   
})

app.post('/mutation', jsonParser, function(req, res) {
  const dna = req.body.dna

  try {
    const mutation = hasMutation(dna)
    if (mutation) {
      res.status(200).end()
    } else {
      res.status(403).end()
    }
  } catch(err) {
    res.json({error: err.message})
  }
})

app.listen(port)
console.log('Listen: http://localhost:' + port)