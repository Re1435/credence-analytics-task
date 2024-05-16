const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const movieRoutes = require('./routes/movieRoutes')
const app = express()

app.use(express.json())
dotenv.config()

const PORT = 3001

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log('Error while connecting DB: ', err))

app.use('/movies', movieRoutes)

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
