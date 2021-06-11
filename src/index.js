require('dotenv').config({ path: 'src/.env' })
const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 8080

const connect = require('./config/db')
connect()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/posts', require('./components/routes/posts'))
app.use('/messages', require('./components/routes/messages'))
app.use('/users', require('./components/routes/users'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})