const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.get('/teste', (req, res) => {
    res.send('Teste')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})