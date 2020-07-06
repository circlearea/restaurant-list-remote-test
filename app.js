// introduce framework
const express = require('express') //express
const exphbs = require('express-handlebars') //handlebars
const restaurants = require('./restaurantList.json')//restaurant list

// declare related variables
const app = express()

// set up template engine
app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

// make a static folder
app.use(express.static('public'))

// set up routers
app.get('/', (req, res) => {
  res.render('index', { style: "index.css", restaurants: restaurants.results })
})

app.get('/restaurants/:id', (req, res) => {
  const restaurant = restaurants.results.find(restaurant => restaurant.id.toString() === req.params.id)
  res.render('show', {
    restaurant: restaurant,
    style: "show.css"
  })
})

// server listening on port 3000
app.listen(3000, () => {
  console.log('This server is listening on http://localhost:3000')
})