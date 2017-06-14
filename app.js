const express = require('express')
const app = express()
const bodyParser = require('body-parser');

// Settings:
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());


// EndPoints:
app.post('/log', (req, res, next) => {

  console.log(req.body)
  res.status(200).send({msg: 'recibido'})
})


// Server listen
app.listen(3011, () => {
  console.log('sendGrid log ACTIVE')
})
