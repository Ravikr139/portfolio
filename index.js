const express = require('express')
const app = express()
const port = 3000
const path = require('path')



// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})