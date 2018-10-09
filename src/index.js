const express = require('express')
const app = express()
const moment = require('moment')
const fs = require('fs')
const hbs = require('hbs')
const path = require('path')

moment.locale('it')

// How to create a middleware: logging middleware
app.use((req, res, next) => {
  let now = new Date().toString()
  let log = `${now}: ${req.method} ${req.url}`

  fs.appendFile('log.txt', log + '\n', err => {
    console.log(err)
  })

  next()
})

// Serve static files
app.use(express.static(__dirname + '/public'))

// Route
app.get('/', (request, response) => {
  let user = {
    name: 'Cristiano',
    likes: ['C#', 'Javascritp', 'Node.js', 'React.js'],
    phrases: {
      uno: 'Node.js is fantastic',
      due: 'Express.js too!',
      voti: [7, 8, 4, 9],
      data: moment().format('LLL')
    }
  }

  response.render('home.hbs', user)
})

// Configuring handlebars
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/views'))

// Route /About with handlebars template
app.get('/about', (request, response) => {
  let user = {
    name: 'Cristiano',
    likes: ['C#', 'Javascritp', 'Node.js', 'React.js']
  }

  response.render('about.hbs', user)
})

app.listen(3000, () => {
  console.log('Start surfing on http://localhost:3000/')
})
