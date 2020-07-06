// introduce framework
const express = require('express') //express
const exphbs = require('express-handlebars') //handlebars


// declare related variables
const app = express()

// 
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

// set up static folder
app.use(express.static('public'))

// set up routers
app.get('/', (req, res) => {
  res.render('index', { style: "index.css" })
})

// server listening on port 3000
app.listen(3000, () => {
  console.log('This server is listening on http://localhost:3000')
})