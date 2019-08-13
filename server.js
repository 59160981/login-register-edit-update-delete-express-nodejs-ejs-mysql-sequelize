const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')


app.use(express.static('views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// add route
app.use('/login', require('./routes/login'))
app.use('/register', require('./routes/register'))



app.get('/', function(req, res) {
    res.redirect('login')
})

app.listen(port, function() {
    console.log('start port http://localhost:' + port)
})