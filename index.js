const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

app
  .use(bodyParser.urlencoded({ extended: false }))
  .get('/', (req, res) => res.send('hello world by nodejs at heroku!'))
  .get('/api', (req, res) =>
    res.send([
      { object: 'john', type: 'string' },
      { object: 10, type: 'number' },
      { object: true, type: 'boolean' }
    ])
  )
  .listen(PORT, () => console.log('listen on port ' + PORT))
