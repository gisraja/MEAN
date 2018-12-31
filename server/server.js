const express = require('express')
const bodyParser = require('body-parser')

const port = 3000
const app = express()
const api = require("./routes/api")

app.use(bodyParser.json())
app.use('/api', api)

app.get('/', function(req, res){
    res.send('Hello world')
})

app.listen(port, function(){
    console.log('server runing on port : '+ port)
})