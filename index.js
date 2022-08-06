const express = require('express')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(authRoutes)

//seed admin
// const { seedAdmin } = require('./seeders/admin')
// seedAdmin()

const PORT = process.env.PORT || 4000

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
.then(() => {
    console.log("DB Connected")
}).catch((err) => {
    console.log(err)
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))