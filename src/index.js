const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
  let user = {
    name: 'Cristiano',
    likes: ['C#', 'Javascritp', 'Node.js', 'React.js'],
    phrases: {
      uno: 'Fatti i razzi tuoi',
      due: 'Mangia la polenta',
      voti: [6, 8, 5, 9]
    }
  }

  response.send(user)
})

app.listen(3000, () => {
  console.log('Start surfing on http://localhost:3000/')
})