const express = require('express')
const app = express()
var cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT

//mongodb
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

app.use(express.static('public'))
app.use(express.json({}))
app.use(express.urlencoded({ extended: false }))
app.use(cors())

//routes
app.use('/posts', require('./routes/posts'))
app.use('/messages', require('./routes/messages'))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})