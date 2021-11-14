
const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
app.use(cors())
const server = require('http').createServer(app)
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))

app.use('/', (req, res) => {
    res.render('index.ejs')
})

server.listen(5000, () => console.log('rodando na porta 5000'))