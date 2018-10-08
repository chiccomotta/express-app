const express = require('express')
const app = express()
const moment = require('moment')

moment.locale('it')

app.use(express.static(__dirname + '/public'))

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

  response.send(user)
})

app.listen(3000, () => {
  console.log('Start surfing on http://localhost:3000/')
})
