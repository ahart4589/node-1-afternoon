const express = require('express')
const bodyParser = require('body-parser')
const messageConstroller = require('./controller/messages_controller')

const app = express()
const port = 3000
const messagesBasedUrl = "/api/messages"

app.use(bodyParser.json())
app.use(express.static('/../public/build'))

app.post(messagesBasedUrl, messageConstroller.create)
app.get(messagesBasedUrl, messageConstroller.read)
app.put(`${messagesBasedUrl}/:id`, messageConstroller.update)
app.delete(`${messagesBasedUrl}/:id`,messageConstroller.delete)


app.listen(3000, ()=>{
    console.log(`Server listeneing on port ${port}`)
})