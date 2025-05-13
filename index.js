const express = require('express')
const port = 3000
const userRoute = require('./src/routes/user.route')
const connectDatabase = require('./src/database/db')

const app = express()

connectDatabase()
app.use(express.json())

app.use("/user", userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})