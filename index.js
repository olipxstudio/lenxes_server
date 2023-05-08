require("dotenv").config({path: './config/_config.env'})

const cors = require("cors")
const express = require("express")
const app = express()
const db = require("./config/connection")
db.connect()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api/v1/get', require('./api/v1/routes/Get'))
app.use('/api/v1/post', require('./api/v1/routes/Post'))
app.use('/api/v1/patch', require('./api/v1/routes/Patch'))

app.use("*", (req, res) => {
  clientError(res, "Page not found");
});

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`connected at `+port)
})