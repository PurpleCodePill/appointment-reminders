const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let items = []

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.render('index', { name: 'depz', newItems: items })
})

app.post('/', function (req, res) {

  let item = {
    message: req.body.message,
    number: req.body.number,
    date: req.body.date,
    time: req.body.time
  }

  items.push(item)
  res.redirect('/')

})
app.listen(3000, () => console.log('listening on port 3000'))