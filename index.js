const hasMutation = require('dna-mutation');
const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./utils/database');

const app = express()
const port = process.env.PORT || 8080
const db = new Database()

const jsonParser = bodyParser.json()

app.get('/stats', async function(req, res) {
  try {
    const countMutation = await db.getCountMutations()
    const countNoMutation = await db.getCountNoMutations()
    const ratio = countMutation / countNoMutation
  
    res.json({
      count_mutations: countMutation,
      count_no_mutation: countNoMutation,
      ratio: ratio
    })
  } catch (error) {
    res.json({error: error.message})
  }
})

app.post('/mutation', jsonParser, function(req, res) {
  const dna = req.body.dna

  try {
    const mutation = hasMutation(dna)
    if (mutation) {
      db.addMutation()
      res.status(200).end()
    } else {
      db.addNoMutation()
      res.status(403).end()
    }
  } catch(err) {
    res.json({error: err.message})
  }
})

app.listen(port)
console.log('Listen: http://localhost:' + port)