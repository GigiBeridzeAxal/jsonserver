const express = require('express')
const errorhandler = require('./middleware/errorhandler')
const connectDB = require('./config/dbConnection')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 3000
const app = express()
app.use(express.json())




connectDB()


app.use('/', require('./routes/root')  )

app.use(errorhandler)

app.listen(port, console.log(`Server Running On Port ${port}`))



