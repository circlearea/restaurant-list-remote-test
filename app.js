// introduce express
const express = require('express')


// declare related variables
const app = express()

// set up routers
app.get('/', (req, res) => {
  res.send('<h1>restaurant html testing<h1>')
})

// server listening on port 3000
app.listen(3000, () => {
  console.log('This server is listening on http://localhost:3000')
})