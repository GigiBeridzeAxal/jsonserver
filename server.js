const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())
const port = 500

app.use('/', require('./routes/root')  )



app.listen(port, () => {
    console.log(`Server Running On Port ${port}`)
})