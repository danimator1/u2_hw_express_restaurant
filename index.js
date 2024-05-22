const appetizersController = require('./controllers/AppetizersController.js')
const entreesController = require('./controllers/EntreesController.js')
const dessertsController = require('./controllers/DessertsController.js')

const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes go here

app.listen(PORT, () => console.log(`Server running on ${PORT}`))


  app.get('/appetizers/:id', appetizersController.getAppetizers)
  app.get('/entrees/:id', entreesController.getEntrees)
  app.get('/desserts/:id', dessertsController.getDesserts)