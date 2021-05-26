const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()
const port = process.env.PORT

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useFindAndModify: false,
  useCreateIndex: true
})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/posts', require('./routes/posts'))
app.use('/messages', require('./routes/messages'))
app.use('/admins', require('./routes/admins'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})