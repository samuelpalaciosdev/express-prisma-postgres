const express = require('express')
const app = express()
const port = 5000
// Extra packages
const morgan = require('morgan')
const prisma = require('./services/prisma')

app.use(express.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

const start = async () => {
  try {
    await prisma.$connect()
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
